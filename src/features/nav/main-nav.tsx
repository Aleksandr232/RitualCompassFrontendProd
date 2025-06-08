import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/shared/ui/navigation-menu";
import { Link, Plus } from "lucide-react";
import { components } from "./config";
import styles from "./index.module.scss";

export function MainNav() {
  return (
    <NavigationMenu className={styles.nav} viewport={false}>
      <NavigationMenuList className={styles.navList}>
        <FuneralServices />
        <About />

        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Plus />
        </NavigationMenuLink>
        <CemeteryAddresses />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className={styles.menuLink}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function FuneralServices() {
  return (
    <NavigationMenuItem className={styles.menuItem}>
      <NavigationMenuTrigger>Ритуальные услуги</NavigationMenuTrigger>
      <NavigationMenuContent className={styles.menuContent}>
        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                href="/"
              >
                <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                <p className="text-muted-foreground text-sm leading-tight">
                  Beautifully designed components built with Tailwind CSS.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <ListItem href="/docs" title="Introduction">
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href="/docs/installation" title="Installation">
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href="/docs/primitives/typography" title="Typography">
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function About() {
  return (
    <NavigationMenuItem className={styles.menuItem}>
      <NavigationMenuTrigger>О нас</NavigationMenuTrigger>
      <NavigationMenuContent className={styles.menuContent}>
        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function CemeteryAddresses() {
  return (
    <>
      <NavigationMenuItem></NavigationMenuItem>
      <NavigationMenuItem className={styles.menuItem}>
        <NavigationMenuTrigger>Адреса кладбищ</NavigationMenuTrigger>
        <NavigationMenuContent className={styles.menuContent}>
          <ul className="grid w-[300px] gap-4">
            <li>
              <NavigationMenuLink asChild>
                <Link href="#" className={styles.menuLink}>
                  <div className="font-medium">Components</div>
                  <div className="text-muted-foreground">
                    Browse all components in the library.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className={styles.menuLink}>
                  <div className="font-medium">Documentation</div>
                  <div className="text-muted-foreground">
                    Learn how to use the library.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className={styles.menuLink}>
                  <div className="font-medium">Blog</div>
                  <div className="text-muted-foreground">
                    Read our latest blog posts.
                  </div>
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
}
