import React, { useState, useEffect } from "react";
import InputGroup from "../components/InputGroup";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const [form, setForm] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setError] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${id}`, form)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => setError(err.response.data));
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/users/${id}`);

      setForm(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4 col-12 col-lg-4">
      <form onSubmit={onSubmitHandler}>
        <InputGroup
          label="Email"
          type="text"
          name="Email"
          onChangeHandler={onChangeHandler}
          errors={errors.Email}
          value={form.Email}
        />
        <InputGroup
          label="Firstname"
          type="text"
          name="Firstname"
          onChangeHandler={onChangeHandler}
          errors={errors.Firstname}
          value={form.Firstname}
        />
        <InputGroup
          label="Lastname"
          type="text"
          name="Lastname"
          onChangeHandler={onChangeHandler}
          errors={errors.Lastname}
          value={form.Lastname}
        />
        <InputGroup
          label="Age"
          type="text"
          name="Age"
          onChangeHandler={onChangeHandler}
          errors={errors.Age}
          value={form.Age}
        />
        <button className="btn btn-primary" type="submit">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Details;
