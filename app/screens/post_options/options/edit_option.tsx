// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useCallback} from 'react';
import {useIntl} from 'react-intl';

import CompassIcon from '@components/compass_icon';
import {Screens} from '@constants';
import {useTheme} from '@context/theme';
import {t} from '@i18n';
import {dismissBottomSheet, showModal} from '@screens/navigation';
import PostModel from '@typings/database/models/servers/post';

import BaseOption from './base_option';

type Props = {
    post: PostModel;
}
const EditOption = ({post}: Props) => {
    const intl = useIntl();
    const theme = useTheme();

    const onPress = useCallback(async () => {
        await dismissBottomSheet(Screens.POST_OPTIONS);
        const title = intl.formatMessage({id: 'mobile.edit_post.title', defaultMessage: 'Editing Message'});
        const closeButton = CompassIcon.getImageSourceSync('close', 24, theme.sidebarHeaderTextColor);
        const passProps = {post, closeButton};
        const options = {modal: {swipeToDismiss: false}};
        showModal(Screens.EDIT_POST, title, passProps, options);
    }, [post]);

    return (
        <BaseOption
            i18nId={t('post_info.edit')}
            defaultMessage='Edit'
            onPress={onPress}
            iconName='pencil-outline'
            testID='post.options.edit'
        />
    );
};

export default EditOption;
