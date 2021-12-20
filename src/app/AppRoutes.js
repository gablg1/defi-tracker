import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const RtlLayout = lazy(() => import('./layout/RtlLayout'));

const Widgets = lazy(() => import('./widgets/Widgets'));

const KanbanBoard = lazy(() => import('./apps/KanbanBoard'));
const Tickets = lazy(() => import('./apps/Tickets'));
const Chats = lazy(() => import('./apps/Chats'));
const TodoList = lazy( () => import('./apps/TodoList'));
const TodoListRtl = lazy( () => import('./apps/TodoListRtl'));

const Accordions = lazy(() => import('./basic-ui/Accordions')); 
const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Badges = lazy(() => import('./basic-ui/Badges'));
const Breadcrumbs = lazy(() => import('./basic-ui/Breadcrumbs'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Modals = lazy(() => import('./basic-ui/Modals'));
const Progress = lazy(() => import('./basic-ui/Progress'));
const Paginations = lazy(() => import('./basic-ui/Paginations'));
const TabsPage = lazy(() => import('./basic-ui/TabsPage'));
const Typography = lazy(() => import('./basic-ui/Typography'));
const Tooltips = lazy(() => import('./basic-ui/Tooltips'));
const Popups = lazy(() => import('./basic-ui/Popups'));

const Dragula = lazy(() => import('./advanced-ui/Dragula'));
const Clipboard = lazy(() => import('./advanced-ui/Clipboards'));
const ContextMenu = lazy(() => import('./advanced-ui/ContextMenus'));
const Sliders = lazy(() => import('./advanced-ui/Sliders'));
const Carousel = lazy(() => import('./advanced-ui/Carousel'));
const Loaders = lazy(() => import('./advanced-ui/Loaders'));
const TreeView = lazy(() => import('./advanced-ui/TreeView'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));
const AdvancedElements = lazy(() => import('./form-elements/AdvancedElements'));
const Validation = lazy(() => import('./form-elements/Validation'));
const Wizard = lazy(() => import('./form-elements/Wizard'));

const BasicTable = lazy(() => import('./tables/BasicTable'));
const DataTable = lazy(() => import('./tables/DataTables'));
const ReactTable = lazy(() => import('./tables/ReactTable'));
const SortableTable = lazy(() => import('./tables/SortableTable'));

const VectorMap = lazy(() => import('./maps/VectorMap'));
const SimpleMap = lazy(() => import('./maps/SimpleMap'));

const Notifications = lazy(() => import('./notifications/Notifications'));

const Mdi = lazy(() => import('./icons/Mdi'));
const FlagIcons = lazy(() => import('./icons/FlagIcons'));
const FontAwesome = lazy(() => import('./icons/FontAwesome'));
const SimpleLine = lazy(() => import('./icons/SimpleLine'));
const Themify = lazy(() => import('./icons/Themify'));
const TypIcons = lazy(() => import('./icons/TypIcons'));

const TextEditors = lazy(() => import('./editors/TextEditors'));
const CodeEditor = lazy(() => import('./editors/CodeEditor'));

const ChartJs = lazy(() => import('./charts/ChartJs'));
const C3Charts = lazy(() => import('./charts/C3Charts'));
const Chartist = lazy(() => import('./charts/Chartist'));
const GoogleCharts = lazy(() => import('./charts/GoogleCharts'));
const SparkLineCharts = lazy(() => import('./charts/SparkLineCharts'));
const GuageChart = lazy(() => import('./charts/GuageChart'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Login2 = lazy(() => import('./user-pages/Login2'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Register2 = lazy(() => import('./user-pages/Register2'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const LandingPage = lazy(() => import('./general-pages/LandingPage'));
const BlankPage = lazy(() => import('./general-pages/BlankPage'));
const Profile = lazy(() => import('./general-pages/Profile'));
const Faq = lazy(() => import('./general-pages/Faq'));
const Faq2 = lazy(() => import('./general-pages/Faq2'));
const NewsGrid = lazy(() => import('./general-pages/NewsGrid'));
const Timeline = lazy(() => import('./general-pages/Timeline'));
const SearchResults = lazy(() => import('./general-pages/SearchResults'));
const Portfolio = lazy(() => import('./general-pages/Portfolio'));
const UserListing = lazy(() => import('./general-pages/UserListing'));

const Invoice = lazy(() => import('./ecommerce/Invoice'));
const Pricing = lazy(() => import('./ecommerce/Pricing'));
const ProductCatalogue = lazy(() => import('./ecommerce/ProductCatalogue'));
const ProjectList = lazy(() => import('./ecommerce/ProjectList'));
const Orders = lazy(() => import('./ecommerce/Orders'));

const Email = lazy(() => import('./apps/Email'));
const Calendar = lazy(() => import('./apps/Calendar'));
const Gallery = lazy(() => import('./apps/Gallery'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ DataTable } />

          <Route exact path="/layout/RtlLayout" component={ RtlLayout } />

          <Route exact path="/widgets" component={ Widgets } />

          <Route exact path="/apps/kanban-board" component={ KanbanBoard } />
          <Route exact path="/apps/todo-list" component={ TodoList } />
          <Route exact path="/apps/todo-list-rtl" component={ TodoListRtl } />
          <Route exact path="/apps/tickets" component={ Tickets } />
          <Route exact path="/apps/chats" component={ Chats } />

          <Route path="/basic-ui/accordions" component={ Accordions } />
          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/badges" component={ Badges } />
          <Route path="/basic-ui/breadcrumbs" component={ Breadcrumbs } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/modals" component={ Modals } />
          <Route path="/basic-ui/progressbar" component={ Progress } />
          <Route path="/basic-ui/pagination" component={ Paginations } />
          <Route path="/basic-ui/tabs" component={ TabsPage } />
          <Route path="/basic-ui/typography" component={ Typography } />
          <Route path="/basic-ui/tooltips" component={ Tooltips } />
          <Route path="/basic-ui/popups" component={ Popups } />

          <Route path="/advanced-ui/dragula" component={ Dragula } />
          <Route path="/advanced-ui/clipboard" component={ Clipboard } />
          <Route path="/advanced-ui/context-menu" component={ ContextMenu } />
          <Route path="/advanced-ui/sliders" component={ Sliders } />
          <Route path="/advanced-ui/carousel" component={ Carousel } />
          <Route path="/advanced-ui/loaders" component={ Loaders } />
          <Route path="/advanced-ui/tree-view" component={ TreeView } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />
          <Route path="/form-Elements/advanced-elements" component={ AdvancedElements } />
          <Route path="/form-Elements/validation" component={ Validation } />
          <Route path="/form-Elements/wizard" component={ Wizard } />

          <Route path="/tables/basic-table" component={ BasicTable } />
          <Route path="/tables/data-table" component={ DataTable } />
          <Route path="/tables/react-table" component={ ReactTable } />
          <Route path="/tables/sortable-table" component={ SortableTable } />

          <Route path="/maps/vector-map" component={ VectorMap } />
          <Route path="/maps/simple-map" component={ SimpleMap } />
          
          <Route path="/notifications" component={ Notifications } />

          <Route path="/icons/mdi" component={ Mdi } />
          <Route path="/icons/flag-icons" component={ FlagIcons } />
          <Route path="/icons/font-awesome" component={ FontAwesome } />
          <Route path="/icons/simple-line" component={ SimpleLine } />
          <Route path="/icons/themify" component={ Themify } />
          <Route path="/icons/typicons" component={ TypIcons } />

          <Route path="/editors/text-editors" component={ TextEditors } />
          <Route path="/editors/code-editor" component={ CodeEditor } />
          
          <Route path="/icons/themify" component={ Themify } />

          <Route path="/charts/chart-js" component={ ChartJs } />
          <Route path="/charts/c3-chart" component={ C3Charts } />
          <Route path="/charts/chartist" component={ Chartist } />
          <Route path="/charts/google-charts" component={ GoogleCharts } />
          <Route path="/charts/sparkline-charts" component={ SparkLineCharts } />
          <Route path="/charts/guage-chart" component={ GuageChart } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/login-2" component={ Login2 } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/register-2" component={ Register2 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />
          <Route path="/general-pages/landing-page" component={ LandingPage } />
          <Route path="/general-pages/profile" component={ Profile } />
          <Route path="/general-pages/faq-1" component={ Faq } />
          <Route path="/general-pages/faq-2" component={ Faq2 } />
          <Route path="/general-pages/news-grid" component={ NewsGrid } />
          <Route path="/general-pages/timeline" component={ Timeline } />
          <Route path="/general-pages/search-results" component={ SearchResults } />
          <Route path="/general-pages/portfolio" component={ Portfolio } />
          <Route path="/general-pages/user-listing" component={ UserListing } />

          <Route path="/ecommerce/invoice" component={ Invoice } />
          <Route path="/ecommerce/pricing" component={ Pricing } />
          <Route path="/ecommerce/product-catalogue" component={ ProductCatalogue } />
          <Route path="/ecommerce/project-list" component={ ProjectList } />
          <Route path="/ecommerce/orders" component={ Orders } />

          <Route path="/apps/email" component={ Email } />
          <Route path="/apps/calendar" component={ Calendar } />
          <Route path="/apps/gallery" component={ Gallery } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
