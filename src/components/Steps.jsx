import  { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import CartScreen from '../screens/CartScreen';
import ShippingScreen from '../screens/ShippingScreen';
import PaymentScreen from '../screens/PaymentScreen';

function Steps({ cart, setCart}) {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  
  const shouldAllowSelectStep = (step) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm" style={{padding:'0 100px'}}>
        <Stepper.Step
          label="Cart"
          description="Check your cart"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          <CartScreen cart={cart} setCart={setCart} />
        </Stepper.Step>
        <Stepper.Step
          label="Shipping"
          description="Add your address"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          <ShippingScreen />
        </Stepper.Step>
        <Stepper.Step
          label="Payment"
          description="select payment method"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          <PaymentScreen cart={cart}/>
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </>
  );
}

export default Steps;
