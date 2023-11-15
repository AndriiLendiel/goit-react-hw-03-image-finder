import { Rings } from "react-loader-spinner";

export const Loader = () => {
return (
  <div style={{
    position: 'absolute',
    left: '40%',
    top: '0',
marginLeft: 'auto',
marginRight: 'auto',
width: '500px',
height: '300px',
// zIndex: '999',
  }}>
<Rings
  height="800"
  width="800"
  color="#3f51b5"
  radius="60"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>
  </div>

)

}