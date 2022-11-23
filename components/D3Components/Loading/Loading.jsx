import LoadingAnimation from '../../../public/loading1.json'
import Lottie from 'lottie-react';

export default function Loading() {
    return (
        <>
            <Lottie
                style={{
                    width: 100,
                    height: 100
                }}
                animationData={LoadingAnimation} loop={true}
            />
        </>
    )
}
