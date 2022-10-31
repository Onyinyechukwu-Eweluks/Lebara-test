import React from 'react'
import {
  Flex, Show, Spacer, Stack,
} from '@chakra-ui/react';

export default function Wrapper() {
  return (
    <Flex h='28px' my='20px' w="90%">
      <Stack direction={['column', 'row']} spacing='24px'>
        <div class="logo">
          <img src="/images/Logo-2.png" alt="" />
        </div>
        <Show above='md'>
          <ul class="nav-list">
            <li class="nav-list-item">Sim Only</li>
            <li class="nav-list-item">Prepaid</li>
            <li class="nav-list-item">Phones</li>
            <li class="nav-list-item">Services</li>
          </ul>
        </Show>
      </Stack>
      <Spacer />
      <Stack direction={['column', 'row']} spacing='24px'>
        <Show above='md'>
        <ul class="nav-list">
          <li class="nav-list-item">
            <img src="/images/Icon-1.png" alt="" /> Account
          </li>
          <li class="nav-list-item">
            <img src="./images/Icon-5.png" alt="" />Top up
          </li>
          <li class="nav-list-item">
            NL<img src="/images/Icon-6.png" alt="" />
          </li>
        </ul>
        </Show>
        <Show below='md'>
        <ul class="nav-list">
          <li class="nav-list-item">
            <img src="/images/Iconmobile.png" alt="" /><span
            >Top-up</span>
          </li>
          <li class="nav-list-item">
            <img src="/images/Hamburger-1.png" alt="" />Menu
          </li>
        </ul>
        </Show>
      </Stack>
    </Flex>
  )
}
