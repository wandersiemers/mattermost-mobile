// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import CompassIcon from '@components/compass_icon';
import FormattedText from '@components/formatted_text';
import {useTheme} from '@context/theme';
import {changeOpacity} from '@utils/theme';

import getStyleSheet from './style';

type SettingsItemProps = {
    centered: boolean;
    defaultMessage: string;
    i18nId: string;
    iconName: string;
    isDestructor: boolean;
    isLink: boolean;
    messageValues: Record<string, any>;
    onPress: () => void;
    rightComponent: React.ReactNode;
    separator: boolean;
    showArrow: boolean;
    testID: string;
};

const SettingsItem = ({
    centered,
    defaultMessage,
    i18nId,
    iconName,
    isDestructor = false,
    isLink = false,
    messageValues,
    onPress,
    rightComponent,
    separator = true,
    showArrow,
    testID,
}: SettingsItemProps) => {
    const theme = useTheme();
    const style = getStyleSheet(theme);

    const renderText = () => {
        const textStyle = [
            style.label,
            isDestructor && style.destructor,
            centered && style.centerLabel,
            isLink && style.linkContainer,
        ];

        if (!i18nId) {
            return <Text style={textStyle}>{defaultMessage}</Text>;
        }

        return (
            <FormattedText
                values={messageValues}
                id={i18nId}
                defaultMessage={defaultMessage}
                style={textStyle}
            />
        );
    };

    const getAdditionalComponent = () => {
        if (showArrow) {
            return (
                <CompassIcon
                    name='chevron-right'
                    style={style.arrow}
                />
            );
        }

        if (rightComponent) {
            return rightComponent;
        }

        return null;
    };

    return (
        <TouchableOpacity
            testID={testID}
            onPress={onPress}
        >
            <View style={style.container}>
                {iconName && (
                    <View style={style.iconContainer}>
                        <CompassIcon
                            name={iconName}
                            style={[
                                [
                                    style.icon,
                                    {color: changeOpacity(theme.centerChannelColor, 0.64)},
                                    isDestructor && style.destructor,
                                ],
                            ]}
                        />
                    </View>
                )}
                <View style={style.wrapper}>
                    <View style={style.labelContainer}>
                        {renderText()}
                        {(showArrow || rightComponent) && (
                            <View style={style.arrowContainer}>
                                {getAdditionalComponent()}
                            </View>
                        )}
                    </View>
                </View>
            </View>
            {separator && (
                <View style={style.dividerContainer}>
                    <View style={style.divider}/>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default SettingsItem;
