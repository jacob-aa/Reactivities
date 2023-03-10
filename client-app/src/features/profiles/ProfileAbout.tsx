import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Button, Grid, Header, Tab } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import ProfileEdit from './ProfileEdit';

export default observer(function ProfileAbout() {
    const {profileStore} = useStore();
    const {isCurrentUser, profile} = profileStore;
    const [editMode, setEditMode] = useState(false);


    return(
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header
                        floated='left'
                        icon='user'
                        content={`About ${profile?.username}`}
                    />
                    {isCurrentUser && (
                        <Button
                        floated='right'
                        content={editMode ? 'Cancel' : 'Edit Profile'}
                        basic
                        color={editMode ? 'red' : 'grey'}
                        onClick={() => setEditMode(!editMode)}
                        />
                    )}
                </Grid.Column>
                <Grid.Column width={16}>
                    {
                        editMode ? 
                            <ProfileEdit setEditMode={setEditMode} /> 
                            : 
                            <span style={{whiteSpace: 'pre-wrap'}}>{profile?.bio}</span>
                    }
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
})