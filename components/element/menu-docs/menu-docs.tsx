import { Menu, MenuSidebar } from '@zenbu-ui/menu'
import { Text } from '@zenbu-ui/typography'
import { useRouter } from 'next/router'

type MenuDocs = {
  slug: string
}

export const MenuDocs = (props: MenuDocs) => {
  const router = useRouter()

  return(
    <MenuSidebar
    width="64" height="full" responsive
    color="slate" colorContrast="50"
    darkColor="slate" darkColorContrast="700"
    itemTextColor="slate" itemTextColorContrast="500"
    itemTextColorHover="slate" itemTextColorHoverContrast="800"
    darkItemTextColor="slate" darkItemTextColorContrast="100" darkItemTextColorHover="slate" darkItemTextColorHoverContrast="300"
    itemBgColorHover="transparent"
    borderColor="slate" borderColorContrast="200"
    darkBorderColor="slate" darkBorderColorContrast="600"
    itemActiveFontWeight="bold"
    itemPY="2">
      <Menu.Items title={(<Text fontSize="xs" color="black" ml="5" mb="2">Overview</Text>)}>
        <Menu.Item active={props.slug === "introduction"} onClick={() => router.push("/docs/introduction")}>Introduction</Menu.Item>
        <Menu.Item active={props.slug === "quickstart"} onClick={() => router.push("/docs/quickstart")}>Quickstart</Menu.Item>
        <Menu.Item active={props.slug === "theming"} onClick={() => router.push("/docs/theming")}>Theming</Menu.Item>
        <Menu.Item active={props.slug === "dark-mode"} onClick={() => router.push("/docs/dark-mode")}>Dark Mode</Menu.Item>
        <Menu.Item active={props.slug === "releases"} onClick={() => router.push("/docs/releases")}>Releases</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="black" ml="5" mb="2">Styling</Text>)}>
        <Menu.Item active={props.slug === "color-palette"} onClick={() => router.push("/docs/color-palette")}>Color Palette</Menu.Item>
        <Menu.Item active={props.slug === "size"} onClick={() => router.push("/docs/size")}>Size</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="black" ml="5" mb="2">Components</Text>)}>
        <Menu.Item active={props.slug === "accordion"} onClick={() => router.push("/docs/accordion")}>Accordion</Menu.Item>
        <Menu.Item active={props.slug === "alert-dialog"} onClick={() => router.push("/docs/alert-dialog")}>Alert Dialog</Menu.Item>
        <Menu.Item active={props.slug === "avatar"} onClick={() => router.push("/docs/avatar")}>Avatar</Menu.Item>
        <Menu.Item active={props.slug === "badge"} onClick={() => router.push("/docs/badge")}>Badge</Menu.Item>
        <Menu.Item active={props.slug === "blockquote"} onClick={() => router.push("/docs/blockquote")}>Blockquote</Menu.Item>
        <Menu.Item active={props.slug === "box"} onClick={() => router.push("/docs/box")}>Box</Menu.Item>
        <Menu.Item active={props.slug === "breadcrumb"} onClick={() => router.push("/docs/breadcrumb")}>Breadcrumb</Menu.Item>
        <Menu.Item active={props.slug === "button"} onClick={() => router.push("/docs/button")}>Button</Menu.Item>
        <Menu.Item active={props.slug === "card"} onClick={() => router.push("/docs/card")}>Card</Menu.Item>
        <Menu.Item active={props.slug === "checkbox"} onClick={() => router.push("/docs/checkbox")}>Checkbox</Menu.Item>
        <Menu.Item active={props.slug === "credit-card"} onClick={() => router.push("/docs/credit-card")}>Credit Card</Menu.Item>
        <Menu.Item active={props.slug === "dialog"} onClick={() => router.push("/docs/dialog")}>Dialog</Menu.Item>
        <Menu.Item active={props.slug === "flexbox"} onClick={() => router.push("/docs/flexbox")}>Flexbox</Menu.Item>
        <Menu.Item active={props.slug === "grid"} onClick={() => router.push("/docs/grid")}>Grid</Menu.Item>
        <Menu.Item active={props.slug === "header"} onClick={() => router.push("/docs/header")}>Header</Menu.Item>
        <Menu.Item active={props.slug === "icon"} onClick={() => router.push("/docs/icon")}>Icon</Menu.Item>
        <Menu.Item active={props.slug === "image"} onClick={() => router.push("/docs/image")}>Image</Menu.Item>
        <Menu.Item active={props.slug === "input"} onClick={() => router.push("/docs/input")}>Input</Menu.Item>
        <Menu.Item active={props.slug === "input-date"} onClick={() => router.push("/docs/input-date")}>Input Date</Menu.Item>
        <Menu.Item active={props.slug === "input-file"} onClick={() => router.push("/docs/input-file")}>Input File</Menu.Item>
        <Menu.Item active={props.slug === "input-number"} onClick={() => router.push("/docs/input-number")}>Input Number</Menu.Item>
        <Menu.Item active={props.slug === "link"} onClick={() => router.push("/docs/link")}>Link</Menu.Item>
        <Menu.Item active={props.slug === "list"} onClick={() => router.push("/docs/list")}>List</Menu.Item>
        <Menu.Item active={props.slug === "loader"} onClick={() => router.push("/docs/loader")}>Loader</Menu.Item>
        <Menu.Item active={props.slug === "menu"} onClick={() => router.push("/docs/menu")}>Menu</Menu.Item>
        <Menu.Item active={props.slug === "menu-footer"} onClick={() => router.push("/docs/menu-footer")}>Menu Footer</Menu.Item>
        <Menu.Item active={props.slug === "menu-sidebar"} onClick={() => router.push("/docs/menu-sidebar")}>Menu Sidebar</Menu.Item>
        <Menu.Item active={props.slug === "message"} onClick={() => router.push("/docs/message")}>Message</Menu.Item>
        <Menu.Item active={props.slug === "notification"} onClick={() => router.push("/docs/notification")}>Notification</Menu.Item>
        <Menu.Item active={props.slug === "pagination"} onClick={() => router.push("/docs/pagination")}>Pagination</Menu.Item>
        <Menu.Item active={props.slug === "phone-number"} onClick={() => router.push("/docs/phone-number")}>Phone Number</Menu.Item>
        <Menu.Item active={props.slug === "pin"} onClick={() => router.push("/docs/pin")}>Pin</Menu.Item>
        <Menu.Item active={props.slug === "popover"} onClick={() => router.push("/docs/popover")}>Popover</Menu.Item>
        <Menu.Item active={props.slug === "progress"} onClick={() => router.push("/docs/progress")}>Progress</Menu.Item>
        <Menu.Item active={props.slug === "radio"} onClick={() => router.push("/docs/radio")}>Radio</Menu.Item>
        <Menu.Item active={props.slug === "rating"} onClick={() => router.push("/docs/rating")}>Rating</Menu.Item>
        <Menu.Item active={props.slug === "select"} onClick={() => router.push("/docs/select")}>Select</Menu.Item>
        <Menu.Item active={props.slug === "separator"} onClick={() => router.push("/docs/separator")}>Separator</Menu.Item>
        <Menu.Item active={props.slug === "skeleton"} onClick={() => router.push("/docs/skeleton")}>Skeleton</Menu.Item>
        <Menu.Item active={props.slug === "statistic"} onClick={() => router.push("/docs/statistic")}>Statistic</Menu.Item>
        <Menu.Item active={props.slug === "switch"} onClick={() => router.push("/docs/switch")}>Switch</Menu.Item>
        <Menu.Item active={props.slug === "table"} onClick={() => router.push("/docs/table")}>Table</Menu.Item>
        <Menu.Item active={props.slug === "tabs"} onClick={() => router.push("/docs/tabs")}>Tabs</Menu.Item>
        <Menu.Item active={props.slug === "tags"} onClick={() => router.push("/docs/tags")}>Tags</Menu.Item>
        <Menu.Item active={props.slug === "text"} onClick={() => router.push("/docs/text")}>Text</Menu.Item>
        <Menu.Item active={props.slug === "textarea"} onClick={() => router.push("/docs/textarea")}>Textarea</Menu.Item>
        <Menu.Item active={props.slug === "tooltip"} onClick={() => router.push("/docs/tooltip")}>Tooltip</Menu.Item>
      </Menu.Items>
    </MenuSidebar>
  )
}
