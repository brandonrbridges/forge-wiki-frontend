import Link from 'next/link'

const Sidebar = () => {
  const items = [
    {
      category_name: 'Main Site',
      links: [
        { name: 'Home', destination: '/' },
      ]
    },
    {
      category_name: 'Game Information',
      links: [
        { name: 'Patch Notes', destination: '/patch-notes' }
      ]
    },
    {
      category_name: 'World',
      links: [
        { name: 'Areas', destination: '/areas' },
        { name: 'Dungeons', destination: '/dungeons' },
        { name: 'Town', destination: '/town' },
        { name: 'Quests', destination: '/quests' },
      ]
    },
    {
      category_name: 'Items',
      links: [
        { name: 'Materials', destination: ''},
        { name: 'Recipes', destination: '/recipes' }
      ]
    },
    {
      category_name: 'Encyclopedia',
      links: [
        { name: 'Heroes', destination: '/heroes' },
        { name: 'Buffs', destination: '/buffs' },
        { name: 'Perks', destination: '/perks' },
        { name: 'Tiers', destination: '/tiers' },
        { name: 'Bosses', destination: '/bosses' },
        { name: 'Monsters', destination: '/monsters' },
        { name: 'Skills', destination: '/skills' },
        { name: 'Playbooks', destination: '/playbooks' },
      ]
    }
  ]
  
  return (
    <ul className='gap-y-8 grid grid-cols-1'>
      {items.map((item, key) => (
        <li key={key}>
          <h6 className='font-bold mb-2 text-gray-500 text-xs'>{item.category_name}</h6>
          <ul className='gap-y-1 grid grid-cols-1'>
            {item.links.map((link, key) => (
              <li key={key} className='hover:pl-2'>
                <Link href={link.destination}>
                  <a className='text-gray-400 hover:text-gray-200'>
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar