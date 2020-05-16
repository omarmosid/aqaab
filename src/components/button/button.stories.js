import React from 'react'
import Button from "./button";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
}

export const Regular = () => <Button>Regular</Button>;

export const Primary = () => {
  return (
    <Button variant="primary" onClick={action('button clicked')}>
      yadadsadasaasdasd
    </Button>
  )
}

export const Secondary = () => {
  return (
    <Button variant="secondary" onClick={action('button clicked')}>
      yadadsadasaasdasd
    </Button>
  )
}

export const Big = () => {
  return (
    <Button size="big" onClick={action('button clicked')}>
      yadadsadasaasdasd
    </Button>
  )
}