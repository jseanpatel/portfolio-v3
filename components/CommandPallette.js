import 'react-cmdk/dist/cmdk.css';
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from 'react-cmdk';
import { useState } from 'react';

const CommandPallette = () => {
  const [page, setPage] = useState('root');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  useHandleOpenCommandPalette(setOpen);

  const items = filterItems(
    [
      {
        heading: 'Home',
        id: 'home',
        items: [
          {
            id: 'home',
            children: 'Home',
            icon: 'HomeIcon',
            href: '/',
          },
          {
            id: 'projects',
            children: 'Projects',
            icon: 'CollectionIcon',
            href: '/projects',
            // closeOnSelect: false,
            // onClick: () => {
            //   setPage('projects');
            // },
          },
          {
            id: 'blog',
            children: 'Blog',
            icon: 'NewspaperIcon',
            href: '/blog',
          },
          {
            id: 'about',
            children: 'About',
            icon: 'InformationCircleIcon',
            href: '/about',
          },
        ],
      },
      {
        heading: 'Other',
        id: 'advanced',
        items: [
          {
            id: 'resume',
            children: 'Resume',
            icon: 'PaperClipIcon',
            href: '/resume',
          },
          {
            id: 'privacy-policy',
            children: 'Privacy policy',
            icon: 'SupportIcon',
            href: '#',
          },
        ],
      },
    ],
    search,
  );

  // this is if I want to add another page just for projects, right now I have no nested pages
  // const projectItems = filterItems(
  //   [
  //     {
  //       heading: 'Home',
  //       id: 'home',
  //       items: [
  //         {
  //           id: 'nothome',
  //           children: 'NotHome',
  //           icon: 'HomeIcon',
  //           href: '#',
  //         },
  //         {
  //           id: 'projects',
  //           children: 'Projects',
  //           icon: 'CollectionIcon',
  //           href: '/projects',
  //           // closeOnSelect: false,
  //           // onClick: () => {
  //           //   setPage('projects');
  //           // },
  //         },
  //         {
  //           id: 'blog',
  //           children: 'Blog',
  //           icon: 'NewspaperIcon',
  //           href: '/blog',
  //         },
  //         {
  //           id: 'about',
  //           children: 'About',
  //           icon: 'CollectionIcon',
  //           href: '/about',
  //         },
  //       ],
  //     },
  //     {
  //       heading: 'Other',
  //       id: 'advanced',
  //       items: [
  //         {
  //           id: 'resume',
  //           children: 'Resume',
  //           icon: 'PaperClipIcon',
  //           href: '/resume',
  //         },
  //         {
  //           id: 'privacy-policy',
  //           children: 'Privacy policy',
  //           icon: 'SupportIcon',
  //           href: '#',
  //         },
  //       ],
  //     },
  //   ],
  //   search,
  // );

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={page}
    >
      <CommandPalette.Page id="root">
        {items.length ? (
          items.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(items, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>

      <CommandPalette.Page id="projects">
        {items.length ? (
          items.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(items, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>

      {/* Add more pages by adding CommandPalette.Page with the respective id */}
    </CommandPalette>
  );
};

export default CommandPallette;
