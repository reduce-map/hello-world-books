const { REACT_APP_API_BASE } = process.env

if (!REACT_APP_API_BASE) {
  throw new Error('REACT_APP_API_BASE is not defined in .env file')
}

export default REACT_APP_API_BASE
