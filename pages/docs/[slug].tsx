import React from 'react'
import Head from 'next/head'
import { Box } from '@zenbu-ui/box'
import { List } from '@zenbu-ui/list'
import { Header, Text } from '@zenbu-ui/typography'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import Layout from '../../layouts/mdx'
import { getDocs, getAllDocs } from '../../utils/mdx'
import { MenuDocs } from '../../components/element/menu-docs/menu-docs'
import { MenuTop } from '../../components/element/menu-docs/menu-top'
import { NpmInstall } from '../../components/example/installation'
import { Example } from '../../components/example/example'
import { PreviewDarkMode, ExampleDarkMode } from '../../components/code/docs/example/dark-mode'
import { PreviewTheming } from '../../components/code/docs/example/theming'
import { TailwindGenerate } from '../../components/code/docs/installation'
import { PreviewAccordion, AccordionProps, AccordionItemProps} from '../../components/code/docs/example/accordion'
import { PreviewAlertDialog, AlertDialogProps } from '../../components/code/docs/example/alert-dialog'
import { PreviewAvatar, PreviewAvatarBlur, PreviewAvatarGroup, PreviewAvatarText, AvatarProps, AvatarGroupProps } from '../../components/code/docs/example/avatar'
import { PreviewBadge, PreviewBadgeOverflow, PreviewBadgePreSuff, BadgeProps } from '../../components/code/docs/example/badge'
import { PreviewBox, PreviewBoxBgImage, PreviewBoxImage, PreviewBoxGradient, BoxProps, BoxImageProps } from '../../components/code/docs/example/box'
import { PreviewBreadcrumb, BreadcrumbProps, BreadcrumbItemProps } from '../../components/code/docs/example/breadcrumb'
import { PreviewButton, PreviewButtonDropdown, PreviewButtonGroup, PreviewButtonIcon, PreviewButtonLoading, ButtonProps, ButtonDropdownItemProps, ButtonDropdownProps, ButtonGroupItemProps, ButtonGroupProps } from '../../components/code/docs/example/button'
import { PreviewCard, PreviewCardAspectRatio, PreviewCardBackground, PreviewCardFooter, PreviewCardPosition, PreviewCardPositionCenter, CardProps } from '../../components/code/docs/example/card'
import { PreviewDialog, PreviewDialogTitle, PreviewDialogFooter, DialogProps } from '../../components/code/docs/example/dialog'
import { PreviewFlexboxInitial, PreviewFlexbox1, PreviewFlexboxAuto, PreviewFlexboxNone, PreviewFlexGrow, PreviewFlexUngrow, PreviewFlexShrink, PreviewFlexUnshrink, FlexboxProps } from '../../components/code/docs/example/flexbox'
import { PreviewGridWidth, PreviewGridNested, GridProps, GridColumnProps } from '../../components/code/docs/example/grid'
import { PreviewIcon, IconProps } from '../../components/code/docs/example/icon'
import { PreviewImage, PreviewImageCaption, PreviewImageRounded, ImageProps } from '../../components/code/docs/example/image'
import { PreviewList, PreviewListBox, PreviewListIcon, PreviewListMarkerColor, PreviewListNested, PreviewListType, ListProps, ListBoxProps, ListItemProps } from '../../components/code/docs/example/list'
import { PreviewLoader, LoaderProps } from '../../components/code/docs/example/loader'
import { PreviewRating, PreviewRatingCount, PreviewRatingHeart, RatingProps } from '../../components/code/docs/example/rating'
import { PreviewSeparator, PreviewSeparatorColoring, PreviewSeparatorStyle, PreviewSeparatorText, SeparatorProps } from '../../components/code/docs/example/separator'
import { PreviewSkeleton, PreviewSkeletonCircle, PreviewSkeletonColoring, SkeletonProps } from '../../components/code/docs/example/skeleton'
import { PreviewStatistic, PreviewStatisticIcon, PreviewStatisticPrefSuff, PreviewStatisticSeparator, StatisticProps } from '../../components/code/docs/example/statistic'
import { PreviewProgress, PreviewProgressColoring, PreviewProgressCompleted, PreviewProgressPercentage, PreviewProgressText, ProgressProps } from '../../components/code/docs/example/progress'
import { PreviewSwitch, PreviewSwitchLabel, SwitchProps } from '../../components/code/docs/example/switch'
import { PreviewTags, PreviewTagsClosable, TagsProps } from '../../components/code/docs/example/tags'
import { PreviewMessage, PreviewMessageClosable, PreviewMessageFixed, PreviewMessageHeader, MessageProps } from '../../components/code/docs/example/message'
import { PreviewPopover, PreviewPopoverClosable, PreviewPopoverPosition, PopoverProps } from '../../components/code/docs/example/popover'
import { PreviewTooltip, PreviewTooltipPopup, PreviewTooltipPosition, TooltipProps } from '../../components/code/docs/example/tooltip'
import { PreviewPagination, PreviewPaginationRange, PreviewPaginationSimple, PreviewPaginationTotal, PaginationProps } from '../../components/code/docs/example/pagination'
import { PreviewNotification, PreviewNotificationAutoHide, PreviewNotificationCustom, PreviewNotificationPosition, NotificationProps, NotificationProviderProps } from '../../components/code/docs/example/notification'
import { PreviewText, PreviewTextDecoration, PreviewTextFirstLetter, PreviewTextFirstLetterFloat, PreviewTextIndent, PreviewTextSelection, TextProps } from '../../components/code/docs/example/text'
import { PreviewHeaderTransform, PreviewHeader, PreviewHeaderEllipsis, PreviewHeaderMarker, PreviewHeaderMarkerRotate, HeaderProps } from '../../components/code/docs/example/header'
import { PreviewLink, LinkProps } from '../../components/code/docs/example/link'
import { PreviewBlockquote, PreviewBlockquoteCaption, PreviewBlockquoteFalse, BlockquoteProps } from '../../components/code/docs/example/blockquote'
import { PreviewTabs, TabsProps, TabsItemProps } from '../../components/code/docs/example/tabs'
import { PreviewTable, PreviewTableCheckbox, PreviewTableColoring, PreviewTableNumbering, PreviewTableOnClick, PreviewTableStriping, ColumnTable, TableProps } from '../../components/code/docs/example/table'
import { PreviewMenu, PreviewMenuIcon, PreviewMenuDropdown, PreviewMenuDropdownMode, MenuProps, MenuItemProps, MenuDropdownProps } from '../../components/code/docs/example/menu'

const DocsPage = (props: any) => {
  const components = {
    NpmInstall,
    Example,
    PreviewDarkMode, ExampleDarkMode, PreviewTheming, TailwindGenerate,
    PreviewAccordion, AccordionProps, AccordionItemProps,
    PreviewAlertDialog, AlertDialogProps,
    PreviewAvatar, PreviewAvatarBlur, PreviewAvatarGroup, PreviewAvatarText, AvatarProps, AvatarGroupProps,
    PreviewBadge, PreviewBadgeOverflow, PreviewBadgePreSuff, BadgeProps,
    PreviewBox, PreviewBoxBgImage, PreviewBoxImage, PreviewBoxGradient, BoxProps, BoxImageProps,
    PreviewBreadcrumb, BreadcrumbProps, BreadcrumbItemProps,
    PreviewButton, PreviewButtonDropdown, PreviewButtonGroup, PreviewButtonIcon, PreviewButtonLoading, ButtonProps, ButtonDropdownItemProps, ButtonDropdownProps, ButtonGroupItemProps, ButtonGroupProps,
    PreviewCard, PreviewCardAspectRatio, PreviewCardBackground, PreviewCardFooter, PreviewCardPosition, PreviewCardPositionCenter, CardProps,
    PreviewDialog, PreviewDialogTitle, PreviewDialogFooter, DialogProps,
    PreviewFlexboxInitial, PreviewFlexbox1, PreviewFlexboxAuto, PreviewFlexboxNone, PreviewFlexGrow, PreviewFlexUngrow, PreviewFlexShrink, PreviewFlexUnshrink, FlexboxProps,
    PreviewGridWidth, PreviewGridNested, GridProps, GridColumnProps,
    PreviewIcon, IconProps,
    PreviewImage, ImageProps, PreviewImageCaption, PreviewImageRounded,
    PreviewList, PreviewListBox, PreviewListIcon, PreviewListMarkerColor, PreviewListNested, PreviewListType, ListProps, ListBoxProps, ListItemProps,
    PreviewLoader, LoaderProps,
    PreviewRating, PreviewRatingCount, PreviewRatingHeart, RatingProps,
    PreviewSeparator, PreviewSeparatorColoring, PreviewSeparatorStyle, PreviewSeparatorText, SeparatorProps,
    PreviewSkeleton, PreviewSkeletonCircle, PreviewSkeletonColoring, SkeletonProps,
    PreviewStatistic, PreviewStatisticIcon, PreviewStatisticPrefSuff, PreviewStatisticSeparator, StatisticProps,
    PreviewProgress, PreviewProgressColoring, PreviewProgressCompleted, PreviewProgressPercentage, PreviewProgressText, ProgressProps,
    PreviewSwitch, PreviewSwitchLabel, SwitchProps,
    PreviewTags, PreviewTagsClosable, TagsProps,
    PreviewMessage, PreviewMessageClosable, PreviewMessageFixed, PreviewMessageHeader, MessageProps,
    PreviewPopover, PreviewPopoverClosable, PreviewPopoverPosition, PopoverProps,
    PreviewTooltip, PreviewTooltipPopup, PreviewTooltipPosition, TooltipProps,
    PreviewPagination, PreviewPaginationRange, PreviewPaginationSimple, PreviewPaginationTotal, PaginationProps,
    PreviewNotification, PreviewNotificationAutoHide, PreviewNotificationCustom, PreviewNotificationPosition, NotificationProps, NotificationProviderProps,
    PreviewText, PreviewTextDecoration, PreviewTextFirstLetter, PreviewTextFirstLetterFloat, PreviewTextIndent, PreviewTextSelection, TextProps,
    PreviewHeaderTransform, PreviewHeader, PreviewHeaderEllipsis, PreviewHeaderMarker, PreviewHeaderMarkerRotate, HeaderProps,
    PreviewLink, LinkProps,
    PreviewBlockquote, PreviewBlockquoteCaption, PreviewBlockquoteFalse, BlockquoteProps,
    PreviewTabs, TabsProps, TabsItemProps,
    PreviewTable, PreviewTableCheckbox, PreviewTableColoring, PreviewTableNumbering, PreviewTableOnClick, PreviewTableStriping, ColumnTable, TableProps,
    PreviewMenu, PreviewMenuIcon, PreviewMenuDropdown, PreviewMenuDropdownMode, MenuProps, MenuItemProps, MenuDropdownProps,
    ...Layout
  }

  return(
    <>
      <Head>
        <title>Zenbu UI - Documentation: {props.frontMatter.title}.</title>

        <meta name="description" content={`Zenbu UI - ${props.frontMatter.description}`} />
        <meta name="keywords" content={`Zenbu UI, Kodepanda UI, React component, React UI, React Tailwind, Kodepanda Kreasi Media, documentation ${props.frontMatter.title},${props.frontMatter.description}`} />
        <meta name="author" content="Yudha Pratama Wicaksana - (Kodepanda Kreasi Media)" />

        <meta property="og:url" content={`https://zenbu-ui.com/docs/${props.slug}`} />
        <meta property="og:title" content={`Zenbu UI - Documentation: ${props.frontMatter.description}`} />
        <meta property="og:description" content={`Zenbu UI - ${props.frontMatter.description}`} />
      </Head>

      <Box as="main" border={false} rounded="none"
      width="full" height="full"
      color="slate" colorContrast="50"
      darkColor="slate" darkColorContrast="700"
      selectionColor="blue" selectionColorContrast="500" selectionTextColor="white"
      darkSelectionColor="slate" darkSelectionColorContrast="200" darkSelectionTextColor="black"
      px="0" py="0">
        <MenuTop />

        <div className="mx-auto w-full mt-11">
          <div className="flex">
            <MenuDocs slug={props.slug} />

            <Box as="article" border={false} rounded="none"
            width="full"
            color="slate" colorContrast="50"
            darkColor="slate" darkColorContrast="700"
            selectionColor="blue" selectionColorContrast="500" selectionTextColor="white"
            darkSelectionColor="slate" darkSelectionColorContrast="200" darkSelectionTextColor="black"
            px="0" py="0">
              <Box as="section" border borderPosition="bottom" rounded="none"
              width="screen" lg={{width: "full"}}
              color="slate" colorContrast="100" darkColor="slate" darkColorContrast="800"
              selectionColor="blue" selectionColorContrast="500" selectionTextColor="white"
              darkSelectionColor="slate" darkSelectionColorContrast="200" darkSelectionTextColor="black"
              borderColor="slate" borderColorContrast="200" darkBorderColor="slate" darkBorderColorContrast="600" px="14" py="10">
                <div className="mt-5 lg:mt-0">
                  <Header as="h5" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="100">{props.frontMatter.title}</Header>
                  <Text color="slate" colorContrast="600" darkColor="slate" darkColorContrast="50" fontSize="base" fontWeight="normal">{props.frontMatter.description}</Text>
                </div>
              </Box>
              <div className="flex">
                <div className="w-full lg:w-2/4 px-14 py-8">
                  <MDXRemote {...props.source} components={{...components}} />
                </div>
                <div className="fixed z-20 top-44 bottom-0 hidden lg:block w-auto py-10" style={{
                  right: "max(0px,calc(60% - 45rem))"
                }}>
                  {props.frontMatter.navigation !== undefined && (
                    <>
                      <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="100" fontSize="sm" fontWeight="bold" mb="1.5">On this page</Text>
                      <List
                      textColor="slate" textColorContrast="500"
                      textColorHover="slate" textColorHoverContrast="700"
                      darkTextColor="slate" darkTextColorContrast="300"
                      darkTextColorHover="slate" darkTextColorHoverContrast="50"
                      fontSize="sm"
                      space="2">
                        {props.frontMatter.navigation.map((data: any) => {
                          return(
                            <List.Item key={data.link} link={data.link} target="_self">
                              {data.name}
                              {data.child !== undefined && (
                                <List.Nested>
                                  {data.child.map((child: any) => {
                                    return(
                                      <List.Item key={child.link} link={child.link} target="_self">
                                        <span className="ml-4">{child.name}</span>
                                      </List.Item>
                                    )
                                  })}
                                </List.Nested>
                              )}
                            </List.Item>
                          )
                        })}
                      </List>
                    </>
                  )}
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </>
  )
}

export default DocsPage

export const getStaticProps = async(props: any) => {
  const { content, data } = getDocs(props.params.slug)

  const mdxSource = await serialize(content, { scope: data })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: props.params.slug
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllDocs(['slug'])

  const paths = posts.map((post: any) => ({
    params: {
      slug: post.slug,
    }
  }))

  return {
    paths,
    fallback: false
  }
}
