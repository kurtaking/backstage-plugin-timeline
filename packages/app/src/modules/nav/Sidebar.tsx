import {
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarScrollWrapper,
  SidebarSpace,
} from '@backstage/core-components';
import { compatWrapper } from '@backstage/core-compat-api';
import { Sidebar } from '@backstage/core-components';
import { NavContentBlueprint } from '@backstage/frontend-plugin-api';
import { SidebarLogo } from './SidebarLogo';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import {
  UserSettingsSignInAvatar,
  Settings as SidebarSettings,
} from '@backstage/plugin-user-settings';

export const SidebarContent = NavContentBlueprint.make({
  params: {
    component: ({ items }) =>
      compatWrapper(
        <Sidebar>
          <SidebarLogo />
          <SidebarDivider />
          <SidebarGroup label="Menu" icon={<MenuIcon />}>
            <SidebarItem icon={HomeIcon} to="catalog" text="Catalog" />
            <SidebarDivider />
            <SidebarScrollWrapper>
              {/* Items in this group will be scrollable if they run out of space */}
              {items.map((item, index) => (
                <SidebarItem {...item} key={index} />
              ))}
            </SidebarScrollWrapper>
          </SidebarGroup>
          <SidebarSpace />
          <SidebarDivider />
          <SidebarGroup
            label="Settings"
            icon={<UserSettingsSignInAvatar />}
            to="/settings"
          >
            <SidebarSettings />
          </SidebarGroup>
        </Sidebar>,
      ),
  },
});
