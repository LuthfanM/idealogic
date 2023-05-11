import React, { useEffect, useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import Parents from '../components/Parents';
import api from '../helpers/api';
import { useLocalStorage } from '@rehooks/local-storage';
import { SV_COMBINE_URI } from '../helpers/uri';
import UserTable from '../components/UserTable';

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [lcToken] = useLocalStorage('token');    
  const [data, setData] = useState([]);

  const addUser = () => {
    return navigate('/form-group');
  };

  useEffect(() => {
    if (lcToken !== null) {
      console.log(lcToken);
      api
        .get(SV_COMBINE_URI, {
          headers: {
            Authorization: `Bearer ${lcToken}`,
          },
        })
        .then((response) => {
          setData(response.data.data);
        })
        .catch((err) => {
          return console.log('error', err);
        });
    }
    return () => {};
  }, [lcToken]);

  const showData = () => {
    return <UserTable data={data} />
  };
  console.log(data);
  return (
    <Parents>
      <Button onClick={addUser}>Tambah User</Button>
      {data && data.length > 0 ? showData() : <Title>Data is Empty</Title>}
    </Parents>
  );
};

export default Login;
