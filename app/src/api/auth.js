const login = async (username, password) => {
    const response = await fetch("http://192.168.85.218:3000/", {
      body: JSON.stringify({ username, password }),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (response.ok) {
    //   callback();
      return response.json();
    }
  
    const errMessage = await response.text();
    throw new Error(errMessage);
};

export default login