import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormField, Label } from "semantic-ui-react";
import React from "react";
import * as Yup from "yup";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

function ProductAdd() {
    const initialValues = { productName: "", price: 10 };
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        UnitPrice: Yup.number().required("Ürün fiyatı zorunludur"),
    });
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}>
            <Form className="ui form">
                <KodlamaIoTextInput name="title" placeholder="Ürün adı" />
                <KodlamaIoTextInput name="price" placeholder="Ürün fiyatı" />

                <Button color="green" type="submit"></Button>
            </Form>
        </Formik>
    );
}

export default ProductAdd;