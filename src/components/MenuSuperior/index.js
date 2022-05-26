import { Button, ButtonGroup, Flex, Spacer, Heading} from "@chakra-ui/react";
import {MdBookmarkAdd,MdInfoOutline,MdDomainVerification} from 'react-icons/md'

export default function MenuSuperior(){
    return(
        <Flex bgColor='#2980b9' h='80px' alignItems='center'>
                <Heading marginLeft='30px' fontSize='20px'>Crud Books</Heading>
                <Spacer/>
                <ButtonGroup gap='2'>
                    <Button _hover={true} color='#fff' leftIcon={<MdBookmarkAdd/>} variant='outline'>Inclusao de Livros</Button>
                    <Button  _hover={false} color='#fff'leftIcon={<MdDomainVerification/>} variant='outline'>Manutencao</Button>
                    <Button  _hover={false} color='#fff' leftIcon={<MdInfoOutline/>}  variant='outline' marginRight='5px'>Sobre</Button>
                </ButtonGroup>
        </Flex>

    )
}