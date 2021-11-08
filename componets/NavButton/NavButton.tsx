import Link from "next/link";
import { withRouter } from "next/router";
import { Button, Icon, Label } from "./NavButton.style";

const NavButton = (props: any) => {
  return (
    <Link href={props.path}>
      <Button active={props.router.pathname === props.path ? true : false}>
        <Icon>{props.icon}</Icon>
        <Label>{props.label}</Label>
      </Button>
    </Link>
  );
};

export default withRouter(NavButton);
