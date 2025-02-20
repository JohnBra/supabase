/**
 * This entire file could do with a cleanup and better code-splitting, but one thing at a time.
 */

// Basic UI things
import Link from 'next/link'
import { Accordion, Alert, Button, CodeBlock, Image, markdownComponents } from 'ui'
import { Admonition } from 'ui-patterns/admonition'
import { GlassPanel } from 'ui-patterns/GlassPanel'
import { IconPanel } from 'ui-patterns/IconPanel'
import { TabPanel, Tabs } from '~/features/ui/Tabs'

// Common components
import { CH } from '@code-hike/mdx/components'
import { ArrowDown, Check } from 'lucide-react'
import { Heading } from 'ui'
import StepHikeCompact from '~/components/StepHikeCompact'
import ButtonCard from './ButtonCard'

// Reference guide specific
// [Charis] I think we can factor these out so they aren't in the bundle for absolutely everything
import CliGlobalFlagsHandler from '~/components/reference/enrichments/cli/CliGlobalFlagsHandler'
import RefSubLayout from '~/layouts/ref/RefSubLayout'
import RefHeaderSection from './reference/RefHeaderSection'

// Other components
import AuthProviders from '~/components/AuthProviders'
import { CostWarning } from '~/components/AuthSmsProviderConfig/AuthSmsProviderConfig.Warnings'
import Options from '~/components/Options'
import Param from '~/components/Params'
import { ProjectConfigVariables } from '~/components/ProjectConfigVariables'
import Table from '~/components/Table'

// Data wrappers
import { NavData } from './NavData'
import { SharedData } from './SharedData'

// Partials
import HuggingFaceDeployment from './MDX/ai/quickstart_hf_deployment.mdx'
import AuthErrorCodesTable from './MDX/auth_error_codes_table.mdx'
import AuthRateLimits from './MDX/auth_rate_limits.mdx'
import DatabaseSetup from './MDX/database_setup.mdx'
import GetSessionWarning from './MDX/get_session_warning.mdx'
import KotlinProjectSetup from './MDX/kotlin_project_setup.mdx'
import MigrationWarnings from './MDX/migration_warnings.mdx'
import OAuthPkceFlow from './MDX/oauth_pkce_flow.mdx'
import ProjectSetup from './MDX/project_setup.mdx'
import QuickstartIntro from './MDX/quickstart_intro.mdx'
import SocialProviderSettingsSupabase from './MDX/social_provider_settings_supabase.mdx'
import SocialProviderSetup from './MDX/social_provider_setup.mdx'
import PostgresInstallation from './MDX/postgres_installation.mdx'

// Icons
import {
  IconMenuApi,
  IconMenuAuth,
  IconMenuCli,
  IconMenuCsharp,
  IconMenuDatabase,
  IconMenuEdgeFunctions,
  IconMenuFlutter,
  IconMenuGettingStarted,
  IconMenuHome,
  IconMenuIntegrations,
  IconMenuJavascript,
  IconMenuKotlin,
  IconMenuPlatform,
  IconMenuPython,
  IconMenuRealtime,
  IconMenuResources,
  IconMenuRestApis,
  IconMenuSelfHosting,
  IconMenuStorage,
  IconMenuSwift,
} from './Navigation/NavigationMenu/MenuIcons'

// Heavy/rare (lazy-loaded)
import SqlToRest from 'ui-patterns/SqlToRest'
import { AppleSecretGenerator } from './AppleSecretGenerator'
import { AuthSmsProviderConfig } from './AuthSmsProviderConfig'
import { Extensions } from './Extensions'
import { JwtGenerator } from './JwtGenerator'
import { RealtimeLimitsEstimator } from './RealtimeLimitsEstimator'

const components = {
  ...markdownComponents,
  Accordion,
  Admonition,
  Alert: (props: any) => (
    <Alert {...props} className="not-prose">
      {props.children}
    </Alert>
  ),
  AppleSecretGenerator,
  AuthProviders,
  AuthErrorCodesTable,
  AuthRateLimits,
  AuthSmsProviderConfig,
  Button,
  ButtonCard,
  CH,
  CliGlobalFlagsHandler: () => <CliGlobalFlagsHandler />,
  CodeBlock,
  CostWarning,
  DatabaseSetup,
  Extensions,
  GetSessionWarning,
  GlassPanel,
  h2: (props: any) => (
    <Heading tag="h2" {...props}>
      {props.children}
    </Heading>
  ),
  h3: (props: any) => (
    <Heading tag="h3" {...props}>
      {props.children}
    </Heading>
  ),
  h4: (props: any) => (
    <Heading tag="h4" {...props}>
      {props.children}
    </Heading>
  ),
  HuggingFaceDeployment,
  IconCheck: Check,
  IconMenuApi,
  IconArrowDown: ArrowDown,
  IconMenuAuth,
  IconMenuCli,
  IconMenuCsharp,
  IconMenuDatabase,
  IconMenuEdgeFunctions,
  IconMenuFlutter,
  IconMenuGettingStarted,
  IconMenuHome,
  IconMenuIntegrations,
  IconMenuJavascript,
  IconMenuKotlin,
  IconMenuPlatform,
  IconMenuPython,
  IconMenuRealtime,
  IconMenuResources,
  IconMenuRestApis,
  IconMenuSelfHosting,
  IconMenuStorage,
  IconMenuSwift,
  IconPanel,
  Image: (props: any) => <Image fill className="object-contain" {...props} />,
  JwtGenerator,
  KotlinProjectSetup,
  Link,
  MigrationWarnings,
  NavData,
  OAuthPkceFlow,
  Options,
  Param,
  ProjectConfigVariables,
  ProjectSetup,
  QuickstartIntro,
  RealtimeLimitsEstimator,
  RefHeaderSection: (props: any) => <RefHeaderSection {...props} />,
  RefSubLayout,
  SharedData,
  SocialProviderSettingsSupabase,
  SocialProviderSetup,
  PostgresInstallation,
  SqlToRest,
  StepHikeCompact,
  table: Table,
  TabPanel,
  Tabs,
}

export default components
