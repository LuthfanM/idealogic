import { Col, Input, Radio, Row, Typography, DatePicker, Button } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Parents from '../components/Parents';
import api from '../helpers/api';
import useDebounce from '../helpers/hooks/useDebounce';
import { useLocalStorage } from '@rehooks/local-storage';
import { SV_COMBINE_URI } from '../helpers/uri';

const initialValues = {
  name: '',
  address: '',
  gender: 'l',
  born_date: '',
};

const FormGroup = () => {  
  const [lcToken] = useLocalStorage('token');    
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [isStatus, setStatus] = useState('');

  const handleInputChange = (event, type) => {
    if (type === 'input') {
      const { name, value } = event.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    } else if (type === 'date') {
      setFormValues((prevValues) => ({
        ...prevValues,
        born_date: event.b,
      }));
    } else {
      const { value } = event.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        gender: value,
      }));
    }
  };

  const debouncedValue = useDebounce(formValues, 500);
  console.log(debouncedValue);

  const addUser = () => {
    api
      .post(SV_COMBINE_URI, formValues, {
        headers: {
          Authorization: `Bearer ${lcToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.message === 'success') {
          toast('user berhasil dibuat');
        }
      })
      .catch((err) => {
        setStatus(err?.data?.detail[0]);
      });
  };

  const errorDisplay = () => {
    let arr = [];
    for (const x in isStatus) {
      arr.push(
        <div>
          {x} : {isStatus[x]}
        </div>,
      );
    }

    return arr;
  };

  return (
    <Parents isBorder>
      <Row style={{ margin: '10px' }}>
        <Col span={12}>
          <Typography.Text style={{ alignSelf: 'center' }}>
            Nama
          </Typography.Text>
        </Col>
        <Col span={12}>
          <div>
            <Input
              name="name"
              style={{ width: '200px' }}
              placeholder="Nama"
              onChange={(e) => handleInputChange(e, 'input')}
            />
          </div>
        </Col>
      </Row>
      <Row style={{ margin: '10px' }}>
        <Col span={12}>
          <Typography.Text>Alamat</Typography.Text>
        </Col>
        <Col span={12}>
          <Input
            name="address"
            style={{ width: '200px' }}
            placeholder="Alamat"
            onChange={(e) => handleInputChange(e, 'input')}
          />
        </Col>
      </Row>
      <Row style={{ margin: '10px' }}>
        <Col span={12}>
          <Typography.Text>P/W</Typography.Text>
        </Col>
        <Col span={12}>
          <Radio.Group
            defaultValue={'l'}
            onChange={(e) => handleInputChange(e)}
            name="gender"
          >
            <Radio value={'l'}>Pria</Radio>
            <Radio value={'p'}>Wanita</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row style={{ margin: '10px' }}>
        <Col span={12}>
          <Typography.Text level={5}>Tanggal Lahir</Typography.Text>
        </Col>
        <Col span={12}>
          <DatePicker
            name="born_date"
            onChange={(a, b) => handleInputChange({ a, b }, 'date')}
          />
        </Col>
      </Row>
      <div>
        <Button onClick={addUser}>Tambah User</Button>
        <Button onClick={()=>navigate('/')}>Kembali ke awal</Button>
      </div>
      <Toaster />
      {<div style={{ color: 'red' }}>{errorDisplay()}</div>}
    </Parents>
  );
};

export default FormGroup;
