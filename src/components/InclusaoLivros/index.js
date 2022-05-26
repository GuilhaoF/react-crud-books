import { FormControl, Text, FormLabel, Input, Button, Stack } from "@chakra-ui/react"


export default function InclusaoLivros() {
    return (
        <FormControl display='flex' flexDirection='column' alignItems='center' isRequired>
            <Text fontSize='3xl' marginTop='1rem' color='#'>Inclusao de Livros</Text>
            <FormLabel htmlFor='email'>Titulo</FormLabel>
            <Input id='email' type='text' maxWidth='320px' borderColor='#2c3e50' />
            <FormLabel htmlFor='email'>Autor</FormLabel>
            <Input id='email' type='text' maxWidth='320px' borderColor='#2c3e50' />
            <FormLabel htmlFor='email'>Url da Capa</FormLabel>
            <Input id='email' type='text' maxWidth='320px' borderColor='#2c3e50' />
            <FormLabel htmlFor='email'>Ano de Publicacao</FormLabel>
            <Input id='email' type='text' maxWidth='320px' borderColor='#2c3e50' />
            <FormLabel htmlFor='email'>Preco R$</FormLabel>
            <Input id='email' type='text' maxWidth='320px' borderColor='#2c3e50' />
            <Stack direction='row' spacing={4} align='center' marginTop='0.5rem'>
                <Button  _hover={false} variant='outline' bgColor='#27ae60'>Adicionar</Button>
                <Button _hover={false} variant='outline' bgColor='#f1c40f'>Limpar</Button>
            </Stack>
        </FormControl>
    )
}