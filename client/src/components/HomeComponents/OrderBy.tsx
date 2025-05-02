import {
  Portal,
  Select,
  Stack,
  createListCollection,
} from "@chakra-ui/react";

interface OrderByProps {
  setOrderOption: React.Dispatch<React.SetStateAction<string[]>>
}

export const OrderBy = ({setOrderOption}: OrderByProps) => {

  const frameworks = createListCollection({
    items: [
      { label: "Date", value: "Date" },
      { label: "Name", value: "Name" },
    ],
  });

  return (
    <Stack gap="5" width="320px">
      <Select.Root collection={frameworks} onValueChange={(e) => setOrderOption(e.value)}>
        <Select.HiddenSelect />
        <Select.Label style={{fontSize: '20px', fontWeight: 'bold'}}>Order By:</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {frameworks.items.map((framework) => (
                <Select.Item item={framework} key={framework.value}>
                  {framework.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Stack>
  );
};
