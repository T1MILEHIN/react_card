import img from '../assets/images/mark.jpeg'


export default function Text(){
    return (
        <div>
            <img src={img} alt='profile-pic' className='mx-auto rounded-lg my-10' style={{maxWidth: '100%'}} />
            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate illo dolore veritatis nesciunt quibusdam obcaecati, laudantium recusandae facilis optio expedita architecto odio fugiat quae animi ea sint vel beatae.</p>
        </div>
    )
}