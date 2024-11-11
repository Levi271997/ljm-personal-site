"use client"

import { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import ControlledIcons from "./icons";
import { sendContactForm } from "../../../lib/api"; 

const ContactSection = ()=>{
    return(

        <section className="contactsection px-5 pt-[60px] md:pt-[84px] pb-[92px] bg-clr-242424">
            <div className="max-w-pagewidth mx-auto">
                <div className="max-w-[445px] mx-auto md:max-w-full flex flex-col md:flex-row justify-between gap-x-5 gap-y-10">
                        <div className="basis-0 md:basis-[445px]">
                            <h2 className="text-[40px] md:text-[72px] lg:text-[88px]  leading-none tracking-[-2.5px] mb-5 md:mb-9 text-center md:text-left">Contact</h2>
                            <p className="text-clr-D9D9D9 text-lg font-medium leading-7 text-center md:text-left">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                        </div>

                        <div className="contactform basis-0 md:basis-[445px]">
                               <ContactForm/>
                        </div>
                </div>
            </div>
        </section>

    )
}

export default ContactSection;


const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
      .email('Sorry, invalid format here')
      .required('Email is required'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters'),
  });

interface Values {
    name: string;
    email: string;
    message: string;
  }

export const ContactForm=()=> {


    return(
<div>
     
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
         validationSchema={validationSchema}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          try {
            await sendContactForm(values);
          } catch (error) {
            console.error('Error sending contact form:', error);
          } finally {
            setSubmitting(false); 
          }
       
        }}
      >
        {({ values, errors, touched }) => (
                <Form>
                <div className={`input-field relative mb-8 ${values.name !== '' ? 'hasval' : '' }`}>
                    <label htmlFor="name" className="uppercase text-white opacity-50 absolute top-0 left-6 pointer-events-none transition-all duration-200 ease-out">name</label>
                    <Field name="name" autoComplete="off" id="name" type="text" aria-label="name" className={`w-full bg-transparent px-6 pb-4 border-b-[1px] focus-visible:border-b-clr-4EE1A0 ${(errors.name && touched.name) ? "border-b-clr-FF6F5B" : ""}`} />
                   
                    
                    {errors.name && touched.name && (
                      <>
                        <div className="absolute top-0 right-0 text-clr-FF6F5B">
                        <ControlledIcons 
                            IconName="inputerror"
                            width={25} 
                            height={25 }
                            
                        />
                        </div>
                        <div className=" mt-1 text-right text-clr-FF6F5B font-medium text-xs tracking-[-0.167px] " >{errors.name}</div>
                        </>
                    )}
                </div>
                <div className={`input-field relative mb-8 ${values.email !== '' ? 'hasval' : '' }`} >
                    <label htmlFor="email" className="uppercase text-white opacity-50 absolute top-0 left-6 pointer-events-none  transition-all duration-200 ease-out">email</label>
                    <Field name="email" autoComplete="off" id="email" type="email"  aria-label="email" className={`w-full bg-transparent px-6 pb-4 border-b-[1px] focus-visible:border-b-clr-4EE1A0 ${(errors.email && touched.email) ? "border-b-clr-FF6F5B" : ""}`}/>
                  
                    {errors.email && touched.email && (
                      <>
                        <div className="absolute top-0 right-0 text-clr-FF6F5B">
                        <ControlledIcons 
                            IconName="inputerror"
                            width={25} 
                            height={25 } 
                        />
                        </div>
                        <div className=" mt-1 text-right text-clr-FF6F5B font-medium text-xs tracking-[-0.167px] " >{errors.email}</div>
                        </>
                    )}
                </div>
                <div className={`input-field relative mb-8 ${values.message !== '' ? 'hasval' : '' }`}>
                    <label htmlFor="message" className="uppercase text-white opacity-50 absolute top-0 left-6 pointer-events-none  transition-all duration-200 ease-out">message</label>
                    <Field name="message" autoComplete="off" id="message" as="textarea"  aria-label="message" className={`resize-none w-full bg-transparent px-6 pb-4 border-b-[1px] min-h-[108px] focus-visible:border-b-clr-4EE1A0 ${(errors.message && touched.message) ? "border-b-clr-FF6F5B" : ""}`}/>
                    
                    {errors.message && touched.message && (
                      <>
                        <div className="absolute top-0 right-0 text-clr-FF6F5B">
                        <ControlledIcons 
                            IconName="inputerror"
                            width={25} 
                            height={25 }
                            
                        />
                        </div>
                        <div className=" mt-1 text-right text-clr-FF6F5B font-medium text-xs tracking-[-0.167px] " >{errors.message}</div>
                        </>
                    )}
                </div>

                <button type="submit" className="cursor-pointer text-[16px] md:text-lg font-bold leading-6 tracking-[2.286px] uppercase block ml-auto pb-[10px] border-b-2 border-b-clr-4EE1A0 hover:text-clr-4EE1A0">Send message</button>

                </Form>
        )}
        
      </Formik>
    </div>
    
    )
}
