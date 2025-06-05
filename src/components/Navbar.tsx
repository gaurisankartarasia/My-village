import React from 'react';
import { Link } from 'react-router-dom';

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, MountainIcon } from "lucide-react";

// Updated type definitions
interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

interface NavLink {
  title: string;
  href?: string; // Optional for dropdown items
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

// Define your navigation links with proper typing
const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  // { title: "About", href: "#about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Kings", href: "/kings" },
  // { title: "Contact", href: "/contact" },
  // {
  //   title: "More",
  //   isDropdown: true,
  //   dropdownItems: [
  //     { title: "Blog", href: "/blog", description: "Read our latest articles." },
  //     { title: "Careers", href: "/careers", description: "Join our amazing team." },
  //   ],
  // },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <MountainIcon className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline-block">My Badamba</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.isDropdown ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.dropdownItems?.map((component) => (
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
                      </>
                    ) : (
                      // Only render Link if href exists
                      item.href && (
                        <NavigationMenuLink asChild>
                          <Link to={item.href} className={navigationMenuTriggerStyle()}>
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      )
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full">
                <SheetHeader className="mb-4">
                  <SheetTitle className="flex items-center justify-between">
                    <span>Menu</span>
                   
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-3">
                  {navLinks.map((item) =>
                    item.isDropdown ? (
                      <div key={item.title} className="space-y-1">
                        <p className="px-3 py-2 font-semibold text-sm text-muted-foreground">
                          {item.title}
                        </p>
                        {item.dropdownItems?.map((subItem) => (
                          <SheetClose asChild key={subItem.href}>
                            <Link
                              to={subItem.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                            >
                              {subItem.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    ) : (
                      // Only render Link if href exists
                      item.href && (
                        <SheetClose asChild key={item.href}>
                          <Link
                            to={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      )
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper component for NavigationMenuContent items
const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href?: string; title?: string }
>(({ className, title, children, href, ...props }, ref) => {
  // Only render if href exists
  if (!href) return null;

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";  