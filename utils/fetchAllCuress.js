export const fetchAllCuress = async (setDataCuress  ) => {
  try {
    const curess = await fetch("http://localhost:3000/api");
    const result = await curess.json();

    if (curess.status === 200) {
      setDataCuress([...result]);
    }
  } catch (error) {
    console.log(error);
  }
};
