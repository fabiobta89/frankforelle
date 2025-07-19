// Render Prop
import React, {useState} from 'react';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
import ApiRoutes from '@/constants/routes/api';

function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
        return {
        outline: '2px solid red'
        }
    }
}

function SubscriptionForm () {

    const [successMessage, setSuccessMessage] = useState(false);

    const initialValues = {
        email_address: '',
    }

    const subscriptionSchema = Yup.object().shape({
        email_address: Yup.string()
          .required('This field is required.').email('This field must be a valid email'),
    });

    const onSubmit = async (values, setSubmitting, resetForm) => {
        setSubmitting(true);
        console.log(values)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}${ApiRoutes.subscriptions.create}`, values)
            .then((res) => {
                setSubmitting(false)
                resetForm();
                setSuccessMessage(true)
            })
            .catch((err) => {
              setSubmitting(false)
            })
    }

    const handleMessage = () => {

        setSuccessMessage(false)
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={subscriptionSchema}
                onSubmit={(values, { setSubmitting, resetForm}) => {
                    onSubmit(values, setSubmitting, resetForm);
                }}
            >
                {({ isSubmitting, errors }) => (
                    <>
                        {successMessage
                            ?
                            <>
                                <div className="flex justify-center text-center p-2 mb-2 rounded-md">
                                    Thanks for subscribing. <br/>Click on the button below to return.
                                </div>
                                <a href="#" onClick={(e) => {handleMessage(e)}} className="inline-flex h-12 mx-auto max-w-min py-2 px-4 mb-8 justify-center items-center bg-purple-800 text-sm text-white font-medium hover:opacity-80 rounded-md">RETURN</a>
                            </>
                            :
                            <Form className='flex flex-col mb-2'>
                            {/* <ErrorMessage className='text-sm text-red-800 text-bold mb-2' name="email_address" component="div" /> */}
                                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
                                    <Field
                                        type="email"
                                        placeholder="Email Address"
                                        name="email_address"
                                        className="col-span-3 sm:col-span-2 h-12 w-full p-4 text-black text-sm focus:outline-none rounded-md"
                                        style={getStyles(errors, 'email_address')}
                                    />
                                    <button type="submit" disabled={isSubmitting} className={`col-span-3 sm:col-span-1 flex justify-center items-center bg-electric-green-900 h-12 w-full p-4 text-sm text-black font-bold hover:opacity-80 font-medium rounded-md ${isSubmitting && "opacity-80" }`}>
                                        {isSubmitting ? "SENDING..." : "SUBSCRIBE" }
                                    </button>
                                </div>
                            </Form>
                        }
                    </>

                )}
            </Formik>
        </>
    )

    // return (
    //     <div>
    //         <Formik
    //             initialValues={initialValues}
    //             validationSchema={subscriptionSchema}
    //             onSubmit={(values, { setSubmitting}) => {
    //                 onSubmit(values, setSubmitting);
    //             }}
    //             >
    //             {({
    //                 values,
    //                 errors,
    //                 touched,
    //                 handleChange,
    //                 handleBlur,
    //                 handleSubmit,
    //                 isSubmitting,
    //                 /* and other goodies */
    //             }) => (
    //                 <form className='flex flex-col mb-2' onSubmit={handleSubmit}>
    //                     {errors.email_address && touched.email_address && errors.email_address}
    //                     <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
    //                         <input
    //                             type="email" 
    //                             placeholder="Email Address" 
    //                             name="email_address" 
    //                             className={`col-span-3 sm:col-span-2 h-12 w-full p-4 text-black text-sm focus:outline-none rounded-md`}
    //                             onChange={handleChange}
    //                             onBlur={handleBlur}
    //                             value={values.email_address}
    //                             style={getStyles(errors, 'email_address')}
    //                         />
    //                         <button 
    //                             type="submit" 
    //                             disabled={isSubmitting}
    //                             className={`col-span-3 sm:col-span-1 flex justify-center items-center bg-purple-800 h-12 w-full p-4 text-sm text-white hover:opacity-80 font-medium rounded-md ${isSubmitting && "opacity-80" }`}
    //                         >
    //                             {isSubmitting ? "SENDING..." : "SUBSCRIBE" }
    //                         </button>
    //                     </div>
    //                 </form>
    //             )}
    //         </Formik>
    //     </div>
    // )
};

export default SubscriptionForm;