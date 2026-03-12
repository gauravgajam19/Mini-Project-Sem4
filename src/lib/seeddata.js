import insforge from './insforge';
// NOTE: This script is intended to be run in a Node.js environment or directly within the app during dev.
// For this task, I'll provide the logic. The user can trigger this from a dev console or I can try to run it if I have node access.

const MOCK_STUDENTS = [
  { id: 1, name: 'Alice', year: '3rd Year', faction: 'innovators', avatar: '🦊', skills: ['React', 'Figma'], interests: ['Hackathons'], online: true, email: 'alice@example.edu' },
  { id: 2, name: 'Bob', year: '2nd Year', faction: 'debuggers', avatar: '🤖', skills: ['Python', 'ML'], interests: ['AI'], online: true, email: 'bob@example.edu' },
  { id: 3, name: 'Charlie', year: '4th Year', faction: 'architects', avatar: '🐺', skills: ['Node.js'], interests: ['Open Source'], online: false, email: 'charlie@example.edu' },
  { id: 4, name: 'Diana', year: '1st Year', faction: 'creators', avatar: '🦋', skills: ['UI/UX'], interests: ['Web3'], online: true, email: 'diana@example.edu' },
  { id: 5, name: 'Ethan', year: '3rd Year', faction: 'innovators', avatar: '🦅', skills: ['Vue', 'React'], interests: ['Gaming'], online: false, email: 'ethan@example.edu' },
  { id: 6, name: 'Fiona', year: '2nd Year', faction: 'debuggers', avatar: '🐉', skills: ['Rust', 'C++'], interests: ['Hackathons'], online: true, email: 'fiona@example.edu' },
];

const MOCK_GROUPS = [
  { id: 1, name: 'Quantum Hackers', event: 'Spring Hackathon', type: 'Hackathon', description: 'Building a quantum-resistant chat app.', skills: ['React', 'Python'], members: 3, maxMembers: 4, privacy: 'public' },
  { id: 2, name: 'Design Wizards', event: 'UI/UX Challenge', type: 'Cultural', description: 'Redesigning the campus portal.', skills: ['Figma', 'UI/UX'], members: 2, maxMembers: 3, privacy: 'public' },
  { id: 3, name: 'AI Models R Us', event: 'AI Summit', type: 'Technical', description: 'Training local LLMs on student data.', skills: ['ML', 'Python'], members: 4, maxMembers: 4, privacy: 'private' },
  { id: 4, name: 'Chain Breakers', event: 'Web3 Weekend', type: 'Hackathon', description: 'Decentralized voting app for campus.', skills: ['Node.js', 'React'], members: 1, maxMembers: 4, privacy: 'public' },
  { id: 5, name: 'Game Jam Team', event: '48h Game Jam', type: 'Technical', description: 'Making a 2D platformer.', skills: ['C++', 'UI/UX'], members: 2, maxMembers: 5, privacy: 'public' },
];

export async function seedDatabase() {
  console.log('Seeding profiles...');
  // Since we don't have real auth users yet, we'll generate UUIDs for mock profiles.
  // In a real app, these would come from the auth.users table.
  const profilesWithIds = MOCK_STUDENTS.map(s => ({
    id: crypto.randomUUID(), 
    name: s.name,
    year: s.year,
    faction: s.faction,
    avatar: s.avatar,
    skills: JSON.stringify(s.skills),
    interests: JSON.stringify(s.interests),
    online: s.online,
    email: s.email
  }));

  const { error: profileError } = await insforge.database
    .from('profiles')
    .insert(profilesWithIds);

  if (profileError) {
    console.error('Error seeding profiles:', profileError);
    return;
  }

  console.log('Seeding groups...');
  const groupsToInsert = MOCK_GROUPS.map((g, index) => ({
    name: g.name,
    event: g.event,
    type: g.type,
    description: g.description,
    skills: JSON.stringify(g.skills),
    members: g.members,
    max_members: g.maxMembers,
    privacy: g.privacy,
    admin_id: profilesWithIds[index % profilesWithIds.length].id
  }));

  const { data: insertedGroups, error: groupError } = await insforge.database
    .from('groups')
    .insert(groupsToInsert)
    .select();

  if (groupError) {
    console.error('Error seeding groups:', groupError);
    return;
  }

  console.log('Seeding group members...');
  const memberships = insertedGroups.map((g, i) => ({
    group_id: g.id,
    profile_id: profilesWithIds[i % profilesWithIds.length].id
  }));

  const { error: memberError } = await insforge.database
    .from('group_members')
    .insert(memberships);

  if (memberError) {
    console.error('Error seeding memberships:', memberError);
  }

  console.log('Seeding complete!');
}
