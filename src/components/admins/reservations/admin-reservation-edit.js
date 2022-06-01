import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Form,
  Button,
  Spinner,
  Row,
  Col,
  ButtonGroup,
  InputGroup,
} from "react-bootstrap";


import { Link, useNavigate, useParams } from "react-router-dom";


const AdminReservationEdit = () => {
  const [initialValues, setInitialValues] = useState({
    pickUpLocation: "",
    dropOfLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
    car: "",
    status: "",
  });
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { reservationId } = useParams();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    car: Yup.number().required("Select a car"),
    pickUpLocation: Yup.string().required("Enter the pick up place"),
    dropOfLocation: Yup.string().required("Enter the drop off place"),
    pickUpDate: Yup.string().required("Select the pick up date"),
    dropOffDate: Yup.string().required("Select the drop off date"),
    pickUpTime: Yup.string().required("Select the pick up time"),
    dropOffTime: Yup.string().required("Select the drop off time"),
    status: Yup.string().required("Select a status"),
  });

  const onSubmit = (values) => {
    
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleDelete = () => {
  
  };

  

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Pick-Up Location</Form.Label>
          <Form.Control
            type="text"
            name="pickUpLocation"
            placeholder="Type a place"
            {...formik.getFieldProps("pickUpLocation")}
            isInvalid={!!formik.errors.pickUpLocation}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.pickUpLocation}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Drop-Off Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type a place"
            {...formik.getFieldProps("dropOfLocation")}
            isInvalid={!!formik.errors.dropOfLocation}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.dropOfLocation}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Pick Up Time</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type="date"
              {...formik.getFieldProps("pickUpDate")}
              isInvalid={!!formik.errors.pickUpDate}
            />
            <Form.Control
              type="time"
              {...formik.getFieldProps("pickUpTime")}
              isInvalid={!!formik.errors.pickUpTime}
            />
          </InputGroup>
          <Form.Control.Feedback type="invalid">
            {formik.errors.pickUpDate || formik.errors.pickUpTime}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Drop Off Time</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type="date"
              {...formik.getFieldProps("dropOffDate")}
              isInvalid={!!formik.errors.dropOffDate}
            />
            <Form.Control
              type="time"
              {...formik.getFieldProps("dropOffTime")}
              isInvalid={!!formik.errors.dropOffTime}
            />
          </InputGroup>
          <Form.Control.Feedback type="invalid">
            {formik.errors.dropOffDate || formik.errors.dropOffTime}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Vehicle</Form.Label>
          <Form.Select
            {...formik.getFieldProps("car")}
            isInvalid={!!formik.errors.car}
          >
            
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {formik.errors.car}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            {...formik.getFieldProps("status")}
            isInvalid={!!formik.errors.status}
          >
            
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {formik.errors.car}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Customer</Form.Label>
          
        </Form.Group>
      </Row>
      <div className="text-end">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" type="submit" disabled={saving}>
          {saving && (
              <Spinner animation="border" variant="light" size="sm" />
            )}{" "}Save
          </Button>
          
          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate("/admin/reservations")}
          >
            Cancel
          </Button>
          
          <Button
            type="button"
            variant="danger"
            disabled={deleting}
          >
            {deleting && (
              <Spinner animation="border" variant="light" size="sm" />
            )}{" "}
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </Form>
  );
};
export default AdminReservationEdit;
