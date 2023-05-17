import { fetchQuizData } from '../../library/axios/axios';
import { useFormContext } from '../../utils/FormContext/FormContext';
import { useState, useEffect } from 'react';

export default function SetupPage() {
  const { formState, formDispatch } = useFormContext();
  const [setup, setSetup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [catagory, setCatagory] = useState('');
  const [dificulty, setDificulty] = useState('');
  const [number, setNumber] = useState('');
  const [isValidNumber, setIsValidNumber] = useState(false);
  const handleSetup = () => {
    formDispatch({ type: 'CHANGE_PAGE', payload: { page: 2 } });
  };
  useEffect(() => {
    number !== '' ? setIsValidNumber(true) : setIsValidNumber(false);
  }, [number]);
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleCategory = (e) => {
    setCatagory(e.target.value);
  };
  const handleDificulty = (e) => {
    setDificulty(e.target.value);
  };
  console.log(catagory);
  const handleData = () => {
    setIsLoading(true);
    fetchQuizData(number, `&category=${catagory}`, `&difficulty=${dificulty}`)
      .then((data) => {
        formDispatch({ type: 'SET_QUIZ_DATA', payload: data });
        console.log(data);
        formState.quizData === data;
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };
  console.log(formState.quizData);
  const handleSetupButton = () => {
    setSetup(true);
  };
  console.log(formState);

  return (
    <div className="h-full flex flex-col justify-between items-center">
      <div className="text-2xl font-bold">Setup Quiz</div>
      <div className="w-3/4">
        <form action="" className=" p-10 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor=""> Number Of Question</label>
            <input
              className="p-2 rounded-md bg-yellow-300 focus:outline-none"
              placeholder="Enter Number"
              type="text"
              onChange={handleNumber}
            />
            {!isValidNumber ? (
              <div className="text-red-400">plese enter number</div>
            ) : (
              ''
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Category</label>
            <select
              className="p-2 rounded-md bg-yellow-300 focus:outline-none text-black"
              name=""
              id=""
              onChange={handleCategory}
            >
              <option value="any">Any</option>
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="27">Animals</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Difficulty</label>
            <select
              className="p-2 rounded-md bg-yellow-300 focus:outline-none text-black"
              name=""
              id=""
              onChange={handleDificulty}
            >
              <option value="">Any</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </form>
      </div>
      <button
        className="flex flex-col mb-5 justify-center items-center"
        onClick={() => {
          if (isValidNumber) {
            handleData();
            handleSetupButton();
            setTimeout(handleSetup, 500);
          }
        }}
      >
        <div className="text-2xl">SRART</div>
        {setup ? (
          <img
            src="./src/assets/img/power-start-green.svg"
            className="w-10"
            alt=""
          />
        ) : (
          <img
            src="./src/assets/img/power-start-red.svg"
            className="w-10"
            alt=""
          />
        )}
      </button>
    </div>
  );
}
{
  /* <form action="">
        <Grid
          container
          className="p-5"
          rowGap={1}
          columns={{ xs: 1, md: 1, sm: 1 }}
        >
          <Grid xs={1} md={1} sm={1}>
            <TextField
              variant="filled"
              color="primary"
              label="Number Of Question"
              className="textfield"
              fullWidth
              sx={{
                bgcolor: '#565e5e',
              }}
            />
          </Grid>
          <Grid xs={1} sm={1} md={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                sx={{
                  bgcolor: '#565e5e',
                }}
                onChange={handleChange}
              >
                <MenuItem value={catagory}>A</MenuItem>
                <MenuItem>B</MenuItem>
                <MenuItem>C</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={1} sm={1} md={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                sx={{
                  bgcolor: '#565e5e',
                }}
                onChange={handleChange}
              >
                <MenuItem>A</MenuItem>
                <MenuItem>B</MenuItem>
                <MenuItem>C</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form> */
}
