import { Button, ButtonGroup, ButtonDropdown, ButtonDropdownHorizontal } from '@zenbu-ui/button'
import { Example } from '../../../example/example'

import { Table } from '@zenbu-ui/table'
import { Tag } from '@zenbu-ui/tags'
import { Text, Link } from '@zenbu-ui/typography'

const cols = [
  {
    header: (<Text componentName="table-column">Prop</Text>),
    accessor: "prop",
    position: "left"
  },
  {
    header: (<Text componentName="table-column">Type</Text>),
    accessor: "type",
    position: "left"
  },
  {
    header: (<Text componentName="table-column">Default</Text>),
    accessor: "default",
    position: "left"
  },
  {
    header: (<Text componentName="table-column">Description</Text>),
    accessor: "description",
    position: "left"
  }
]

export const PreviewButton = () => {
  return(
    <Example py={5}>
      <Button color="blue" colorContrast="600">Button</Button>
    </Example>
  )
}

export const PreviewButtonIcon = () => {
  return(
    <Example py={5} gap={5}>
      <Button icon="phone-solid" iconHeight="4" iconColor="white" />
      <Button icon="phone-solid" iconHeight="4" iconColor="white" py="1.5">Phone</Button>
    </Example>
  )
}

export const PreviewButtonLoading = () => {
  return(
    <Example py={5}>
      <Button loading loadingText="Please Wait..." />
    </Example>
  )
}

export const PreviewButtonDropdown = () => {
  return(
    <Example py={5}>
      <div className="h-52">
        <ButtonDropdown dropdownIconHeight="4">
          Options
          <ButtonDropdown.Item>New Tab</ButtonDropdown.Item>
          <ButtonDropdown.Item>New Window</ButtonDropdown.Item>
          <ButtonDropdown.Item disabled icon="shield-check">New Private Window</ButtonDropdown.Item>
          <ButtonDropdown.Item>
            Favorites
            <ButtonDropdownHorizontal>
              <ButtonDropdown.Item>New Tab</ButtonDropdown.Item>
              <ButtonDropdown.Item>New Window</ButtonDropdown.Item>
              <ButtonDropdown.Item>Download</ButtonDropdown.Item>
            </ButtonDropdownHorizontal>
          </ButtonDropdown.Item>
          <ButtonDropdown.Item icon="cloud-download">Download</ButtonDropdown.Item>
        </ButtonDropdown>
      </div>
    </Example>
  )
}

export const PreviewButtonGroup = () => {
  return(
    <Example py={5}>
      <ButtonGroup>
        <ButtonGroup.Item icon="menu" />
        <ButtonGroup.Item icon="menu-alt-2" />
        <ButtonGroup.Item icon="menu-alt-3" />
      </ButtonGroup>
    </Example>
  )
}

export const ButtonProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">type</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">button</Tag>),
    description: <Text componentName="standard">Set type with button or submit.</Text>
  }, {
    prop: (<Tag componentName="prop">fluid</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make the button width following the width screen.</Text>
  }, {
    prop: (<Tag componentName="prop">loading</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Displaying loading spinner.</Text>
  }, {
    prop: (<Tag componentName="prop">loadingText</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying text when button loading is true.</Text>
  }, {
    prop: (<Tag componentName="prop">disabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Disabled the trigger button.</Text>
  }, {
    prop: (<Tag componentName="prop">circle</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Changing the button shape to a circle.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon on your button component, please read the <Link componentName="standard" href="/docs/icon">icon component</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconHeight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Read the <Link componentName="standard" href="/docs/sizing">size documentation</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconPosition</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">left</Tag>),
    description: <Text componentName="standard">Set the icon position on your button, set with left or right.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the icon color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the icon color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkIconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the icon dark mode color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkIconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the icon dark mode color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">href</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the URL page or anything.</Text>
  }, {
    prop: (<Tag componentName="prop">target</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">_blank</Tag>),
    description: <Text componentName="standard">Set target with _self, _blank, _parent, or _top.</Text>
  }, {
    prop: (<Tag componentName="prop">onClick</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after clicking the button.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const ButtonGroupProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">fluid</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make the button width following the width screen.</Text>
  }, {
    prop: (<Tag componentName="prop">disabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Disabled the trigger button.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const ButtonGroupItemProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">disabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Disabled the trigger button.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon on your button component, please read the <Link componentName="standard" href="/docs/icon">icon component</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconHeight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Read the <Link componentName="standard" href="/docs/sizing">size documentation</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconPosition</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">left</Tag>),
    description: <Text componentName="standard">Set the icon position on your button, set with left or right.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the icon color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the icon color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkIconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the icon dark mode color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkIconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the icon dark mode color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">href</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the URL page or anything.</Text>
  }, {
    prop: (<Tag componentName="prop">target</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">_blank</Tag>),
    description: <Text componentName="standard">Set target with _self, _blank, _parent, or _top.</Text>
  }, {
    prop: (<Tag componentName="prop">onClick</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after clicking the button.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const ButtonDropdownProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">disabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Disabled the trigger button.</Text>
  }, {
    prop: (<Tag componentName="prop">fluid</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make the button width following the width screen.</Text>
  }, {
    prop: (<Tag componentName="prop">circle</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Changing the button shape to a circle.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon on your button component, please read the <Link componentName="standard" href="/docs/icon">icon component</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconHeight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Read the <Link componentName="standard" href="/docs/sizing">size documentation</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the icon color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the icon color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkIconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the icon dark mode color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkIconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the icon dark mode color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBgColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown background color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBgColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dropdown background color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownBgColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown background dark mode color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownBgColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dropdown background dark mode color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBgHoverColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown background color hover for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBgHoverColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dropdown background color hover contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownBgHoverColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown background dark mode color hover for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownBgHoverColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dropdown background dark mode color hover contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown text color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dropdown text color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown dark mode text color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dropdown dark mode text color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextHoverColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown text color hover for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextHoverColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dropdown text color hover contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextHoverColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown dark mode text color hover for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextHoverColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dropdown dark mode text color hover contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownFontSize</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: (<Tag componentName="type">sm</Tag>),
    description: <Text componentName="standard">Change the dropdown menu font size, read the <Link componentName="standard" href="/docs/font-size">font size</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBorder</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">true</Tag>),
    description: <Text componentName="standard"></Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBorderColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown border color hover for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBorderColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">200</Tag>),
    description: <Text componentName="standard">Change the dropdown border color hover contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownRounded</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: (<Tag componentName="type">md</Tag>),
    description: <Text componentName="standard">Change the dropdown rounded corner, please read the <Link componentName="standard" href="/docs/rounded">rounded</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownIconHeight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dropdown menu icon height, please read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownShadow</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dropdown shadow, please read the <Link componentName="standard" href="/docs/shadow">shadow</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownShadowColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dropdown shadow color hover for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownShadowColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">400</Tag>),
    description: <Text componentName="standard">Change the dropdown shadow color hover contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownShadowOpacity</Tag>),
    type: (<Tag componentName="type">opacity</Tag>),
    default: (<Tag componentName="type">50</Tag>),
    description: <Text componentName="standard">Change the dropdown shadow opacity, please read the <Link componentName="standard" href="/docs/shadow">shadow</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const ButtonDropdownItemProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">disabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Disabled the trigger button.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon on your button component, please read the <Link componentName="standard" href="/docs/icon">icon component</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconHeight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Read the <Link componentName="standard" href="/docs/sizing">size documentation</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">onClick</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after clicking the button.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
