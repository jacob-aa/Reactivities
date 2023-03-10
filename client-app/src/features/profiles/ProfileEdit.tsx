import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../app/stores/store'
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/MyTextInput';
import MyTextArea from '../../app/common/form/MyTextArea';
import { Button } from 'semantic-ui-react';

interface Props {
    setEditMode: (editMode: boolean) => void;
}

export default observer(function ProfileEdit({setEditMode}: Props) {
    const {profileStore: {profile, updateProfile}} = useStore();
    const validationSchema = Yup.object({
        displayName: Yup.string().required(),
    })
    

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={
                {
                    displayName: profile?.displayName,
                    bio: profile?.bio
                }
            } 
            onSubmit={values => updateProfile(values).then(() => {setEditMode(false)})}
        >
            {({isSubmitting, isValid, dirty}) => (
                 <Form className='ui form'>
                    <MyTextInput name='displayName' placeholder='Display Name' />
                    <MyTextArea rows={3} name='bio' placeholder='Add your Bio' />
                    <Button
                        positive
                        type='submit'
                        loading={isSubmitting}
                        content='Update profile'
                        floated='right'
                        disabled={!isValid || !dirty}
                    />
                 </Form>
            )}
           
        </Formik>
    )
})