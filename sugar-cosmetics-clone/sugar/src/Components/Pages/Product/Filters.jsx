import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Radio,
  RadioGroup,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
function Filters() {
  const [sortValue, setSortValue] = useState("Relevance");
  const handleSortValue = (e) => {
    setSortValue(e.target.value);
  };
  return (
    <Box width={"100%"} marginTop="25px">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <b>Sort by: </b>
                <span>{sortValue}</span>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} onChange={handleSortValue}>
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="column">
                <Radio colorScheme="gray" value="Relevance" defaultChecked>
                  Relevance
                </Radio>
                <Radio colorScheme="gray" value="Price: High To Low">
                  Price: High To Low
                </Radio>
                <Radio colorScheme="gray" value="Price: Low To High">
                  Price: Low To High
                </Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <b>Filters</b>
              </Box>
            </AccordionButton>
          </h2>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <b>Product Type </b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            <CheckboxGroup
              colorScheme="gray"
            >
              <Stack spacing={[1, 5]} direction={["column"]}>
                <Checkbox value="Crayon Lipstick">Crayon Lipstick</Checkbox>
                <Checkbox value="Liquid Lipstick">Liquid Lipstick</Checkbox>
                <Checkbox value="Matte Lipstick">Matte Lipstick</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <b>Feature</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            <CheckboxGroup
              colorScheme="gray"
            >
              <Stack spacing={[1, 5]} direction={["column"]}>
                <Checkbox value="crayon">Crayon</Checkbox>
                <Checkbox value="Long Lasting">Long Lasting</Checkbox>
                <Checkbox value="Smudge Proof">Smudge Proof</Checkbox>
                <Checkbox value="Water Proof">Water Proof</Checkbox>
                <Checkbox value="Liquid">Liquid</Checkbox>
                <Checkbox value="Fadeproof">Fadeproof</Checkbox>
                <Checkbox value="High Pigmentation">High Pigmentation</Checkbox>
                <Checkbox value="Metallic">Metallic</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <b>Finish</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CheckboxGroup
              colorScheme="gray"
            >
              <Stack spacing={[1, 5]} direction={["column"]}>
              <Checkbox value="Matte">Matte</Checkbox>
                <Checkbox value="Metallic">Metallic</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <b>Formulation</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            <CheckboxGroup
              colorScheme="gray"
            >
              <Stack spacing={[1, 5]} direction={["column"]}>
              <Checkbox value="Crayon">Crayon</Checkbox>
                <Checkbox value="Liquid">Liquid</Checkbox>
                <Checkbox value="Bullet">Bullet</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <b>Shade</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            <CheckboxGroup
              colorScheme="gray"
            >
              <Stack spacing={[1, 5]} direction={["column"]}>
              <Checkbox value="Reds And Oranges">Reds And Oranges</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Filters;
