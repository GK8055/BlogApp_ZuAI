import './index.css'
import { Audio } from 'react-loader-spinner'

const Loader=()=>(
<div className='loader-spinner'>
        <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
        </div>
)


export default Loader