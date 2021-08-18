import styled, { css } from "styled-components";

export const SidebarStyle = styled.aside`
  width: 100px;
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Poppins";
  box-sizing: border-box;
  position: fixed;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuStyle = styled.aside`
  width: 350px;
  background-color: ${({ theme }) => theme.base.menu};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Poppins";
  box-sizing: border-box;
  position: fixed;
  margin-left: 100px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BasePageStyle = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.base.content};
  color: ${({ theme }) => theme.text.main};
  font-family: "Poppins";
  box-sizing: border-box;
  position: absolute;
  margin-left: 450px;
  width: calc(100% - 450px);
`;

export const DashboardPageStyle = styled.div``;

export const IconStyle = styled.div`
  height: 60px;
  width: 60px;
  background-color: #c4c4c4;
  border-radius: 50px;
`;

// Headers
export const BaseHeader = styled.header`
  box-sizing: border-box;
  height: ${({ theme }) => theme.height.topContent};
  box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;
export const SidebarHeader = styled(BaseHeader)`
  justify-content: center;
`;
export const DashboardHeader = styled(BaseHeader)`
  padding: 25px;
`;
export const MenuHeader = styled(BaseHeader)`
  padding: 25px;
  position: fixed;
  z-index: 9999;
  background-color: inherit;
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.content};
`;

export const GuildIcon = styled(IconStyle)<any>`
  height: 75px;
  width: 75px;
  margin: 5px 0px;
  background: url(${({ bg }) => bg});
  background-color: grey;
  background-position: center;
  background-size: 100%;
`;

export const MenuContent = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.padding.content};
  margin-top: 100px;
`;

export const MenuCategory = styled.div`
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  :nth-child(2) {
    margin: 20px 0px;
  }
  span {
    padding: 0px 20px;
  }
`;
export const MenuCategoryItem = styled.section`
  font-size: 22px;
  font-weight: lighter;
  padding: 5px 0px;
  transition: 100ms background-color;
  :hover {
    cursor: pointer;
    background-color: #42494c;
  }
  span {
    padding: 0px 20px;
  }
`;

export const DropdownHeader = styled.div`
  background-color: #21262d;
  padding: 8px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const DropdownItemContainer = styled.div<any>`
  max-height: 0px;
  overflow-y: scroll;
  opacity: 0;
  transition: 300ms;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
  }
  ::-webkit-scrollbar-thumb {
    background-color: #171717;
    border-radius: 50px;
  }
  ${(props) =>
    props.expanded
      ? css`
          max-height: 220px;
          opacity: 1;
        `
      : css`
          max-height: 0px;

          opacity: 0;
        `}
`;

export const DropdownItem = styled.div<any>`
  background-color: #21262d;
  color: white;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 5px 20px;
  :hover {
    background-color: #545d6b;
    cursor: pointer;
  }
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #2e2e2e;
    `}
`;

export const DropdownFooter = styled.footer`
  background-color: #21262d;
  padding: 8px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  font-family: "Poppins";
  padding: 5px 12px;
  background-color: inherit;
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  color: white;
  border-radius: 5px;
  transition: 100ms;
  :hover {
    cursor: pointer;
    background-color: #4a4a4a;
  }
  :active {
    background-color: #262626;
  }
  :disabled {
    background-color: #919191;
    border: none;
  }
`;

export const Input = styled.input`
  font-family: "Poppins";
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 4px 8px;
  border-radius: 5px;
  background-color: inherit;
  color: white;
`;
