import axios from 'axios';


/*export const RegisterUser = async (userName, password) => {
  if (!userName || !password) {
    throw new Error("Имя пользователя и пароль не могут быть пустыми.");
  }

  try {
    const response = await axios.post('https://localhost:7115/api/User/RegisterUser', null, { params: { userName, password } });
    return response.data;
  } catch (error) {
    throw new Error("Пользователь не зарегистрирован: " + error.response.data);
  }
};*/
export const RegisterUser = async (userName, password) => {
  if (!userName || !password) {
    throw new Error("Имя пользователя и пароль не могут быть пустыми.");
  }
  try {
    const response = await axios.post('https://localhost:7115/api/User/RegisterUser', null, {
      params: { username: userName, password: password }
    });
    /*const response = await axios.post('https://localhost:7115/api/User/RegisterUser', {
      username: userName,
      password: password
    });*/
    return response;
  } catch (error) {
    throw error;
  }
}

export const LoginUser = async (userName, password) => {
  if (!userName || !password) {
    throw new Error("Имя пользователя и пароль не могут быть пустыми.");
  }
  try{
    const response = await axios.post('https://localhost:7115/api/User/LoginUser', null, { params: { username: userName, password: password } });
    /*if (response.data === "Username already exist")
    {
        throw new Error("Username already exist");
    }*/
    return response;
} catch (error) {
    throw error;
}
}

export const AddMessage = async (content) =>{
  try{
    const response = await axios.post('https://localhost:7115/api/MessageConroller/AddMessage', null, {params:{content: content}});
    return response;
  }catch(error){
    throw error;
  }
}