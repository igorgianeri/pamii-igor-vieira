import React from 'react';
import { Icon } from "@/components/ui/icon";
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Camera, MoreVertical, Search} from "lucide-react-native";
import { Textarea, TextareaInput } from "@/components/ui/textarea"
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';

export default function index() {
  return (
    <Box className="flex-1 bg-white">
      <Box className="bg-success-800 p-4">
        <Box className="flex-row items-center justify-between">
          <Heading className="text-white">Whatszapps</Heading>
          <Box className="flex-row items-center space-x-4">
            <Icon className="text-white" as={Camera} />
            <Icon className="text-white" as={MoreVertical} />
          </Box>
        </Box>
        <Box className="mt-4">
          <Textarea
            size="xl"
            isReadOnly={true}
            className="w-90% h-11 bg-white rounded-xl flex-row items-center justify-between">
            <Icon className="text-success-800 ml-3" as={Search} size='sm'/>
            <TextareaInput className="flex-1 pt-8" placeholder="Pesquisar"/>
          </Textarea>
        </Box>
      </Box>
        <Avatar size="lg" className="mt-3 ml-2" >
              <AvatarFallbackText>Jane Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            />
            <AvatarBadge />
        </Avatar>
        <Avatar size="lg" className="mt-5 ml-2"> 
              <AvatarFallbackText>Manuel</AvatarFallbackText>
                <AvatarImage
                source={{
                  uri: 'https://images.pexels.com/photos/10163670/pexels-photo-10163670.jpeg',
                }}
              />
             <AvatarBadge />
        </Avatar>
    </Box>
  );
}