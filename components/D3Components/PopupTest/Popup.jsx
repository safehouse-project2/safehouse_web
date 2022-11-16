import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    ButtonGroup,
} from '@chakra-ui/react'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'

function WalkthroughPopover() {
    const initialFocusRef = React.useRef()
    const r = useRouter();
    const goToLogin = () => {
        r.push("/auth/login")
    }
    const goToSignup = () => {
        r.push("/auth/signup")
    }
    return (
        <ChakraProvider>
            <Popover
                initialFocusRef={initialFocusRef}
                placement='bottom'
                closeOnBlur={false}
            >
                <PopoverContent color='white' bg='red.400' borderColor='red.400'>
                    <PopoverTrigger>
                        <Button>Trigger</Button>
                    </PopoverTrigger>
                    <PopoverHeader pt={4} fontWeight='bold' border='0'>
                        You are not logged in!
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Please log in to continue.
                    </PopoverBody>
                    <PopoverFooter
                        border='0'
                        display='flex'
                        alignItems='center'
                        justifyContent='space-between'
                        pb={4}
                    >
                        <ButtonGroup size='sm'>
                            <Button onClick={goToLogin} colorScheme='green'>Login</Button>
                            <Button onClick={goToSignup} colorScheme='blue'>SignUp</Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </ChakraProvider>
    )
}

export default WalkthroughPopover;