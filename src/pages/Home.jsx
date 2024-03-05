import { Box, Text, Flex, FormControl, Button, Spacer, Input, Image} from "@chakra-ui/react";
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";
// Box same as <div>, Text same as <p>, <Flex> for <div display='flex'>

export default function Home() {
  return (    
    <Box bg={'brand.900'} h={"30px"} w={'100%'}>
      <Flex align={'center'} justify={'space-between'} w={'100vw'} h={'20vh'}>
        <Box w={'8vw'} h={'18px'} mx={'3'}>
         <Image src={ Logo } alt="logo" />
        </Box>

        <Spacer/>

        <Box>
         <FormControl>
          <Input type="text" name="search" id="search" placeholder="Search..."  h={'15px'}/>
         </FormControl>
        </Box>

        <Spacer/>

        <Box mx={'3px'} display={'flex'} >
          <Text fontSize={'10px'}><Link to={'/'}>Home</Link></Text>         
          <Button type="submit" color={'white'} bg={"blueviolet" } h={'15px'} w={"10px"} fontSize={'10px'}>
          Signin
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
