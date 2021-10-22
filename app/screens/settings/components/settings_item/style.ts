// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Platform} from 'react-native';

import {changeOpacity, makeStyleSheetFromTheme} from '@utils/theme';

export default makeStyleSheetFromTheme((theme) => {
    return {
        container: {
            alignItems: 'center',
            backgroundColor: theme.centerChannelBg,
            flexDirection: 'row',
            ...Platform.select({
                ios: {
                    height: 45,
                },
                android: {
                    height: 68,
                },
            }),
        },
        linkContainer: {
            marginHorizontal: 15,
            color: theme.linkColor,
        },
        iconContainer: {
            marginHorizontal: 15,
        },
        icon: {
            ...Platform.select({
                ios: {
                    color: theme.centerChannelColor,
                    fontSize: 24,
                    marginTop: 2,
                },
                android: {
                    color: theme.buttonBg,
                    fontSize: 24,
                },
            }),
        },
        wrapper: {
            flex: 1,
        },
        centerLabel: {
            textAlign: 'center',
            textAlignVertical: 'center',
        },
        labelContainer: {
            flex: 1,
            flexDirection: 'row',
        },
        label: {
            color: theme.centerChannelColor,
            flex: 1,
            fontSize: 17,
            ...Platform.select({
                ios: {
                    alignSelf: 'center',
                },
                android: {
                    textAlignVertical: 'center',
                    includeFontPadding: false,
                    paddingRight: 15,
                },
            }),
        },
        arrowContainer: {
            justifyContent: 'center',
            ...Platform.select({
                android: {
                    alignItems: 'center',
                    paddingRight: 15,
                },
                ios: {
                    paddingRight: 11,
                },
            }),
        },
        arrow: {
            color: changeOpacity(theme.centerChannelColor, 0.32),
            fontSize: 24,
        },
        dividerContainer: {
            backgroundColor: theme.centerChannelBg,
            height: 1,
        },
        divider: {
            height: 1,
            ...Platform.select({
                ios: {
                    backgroundColor: changeOpacity(theme.centerChannelColor, 0.08),
                    marginHorizontal: 15,
                },
                android: {
                    backgroundColor: changeOpacity(theme.centerChannelColor, 0.1),
                },
            }),

        },
        destructor: {
            color: theme.errorTextColor,
        },
        safeAreaView: {
            backgroundColor: 'white',
        },
    };
});
