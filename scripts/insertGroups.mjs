import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFile = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf-8');
const env = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) env[match[1].trim()] = match[2].trim();
});

const VITE_SUPABASE_URL = env.VITE_SUPABASE_URL;
const VITE_SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

async function run() {
  const dummyGroups = [
    {
       name: 'AI Innovators',
       event: 'Tech Fest 2026',
       type: 'Technical',
       description: 'A group for AI enthusiasts to collaborate on cutting edge projects and build innovative AI solutions.',
       skills: ['Python', 'Machine Learning', 'AI & ML'],
       members: 2,
       max_members: 5,
       privacy: 'public'
    },
    {
       name: 'Design Mavericks',
       event: 'UI/UX Hackathon',
       type: 'Cultural',
       description: 'Looking for creative minds to design the next big thing in education technology.',
       skills: ['Figma', 'UI/UX', 'Graphic Design'],
       members: 1,
       max_members: 4,
       privacy: 'public'
    },
    {
       name: 'Blockchain Builders',
       event: 'Web3 Summit',
       type: 'Hackathon',
       description: 'Building decentralized tracking applications for logistics and supply chain management.',
       skills: ['Solidity', 'Web3', 'React'],
       members: 3,
       max_members: 6,
       privacy: 'public'
    }
  ];

  const { data, error } = await supabase.from('groups').insert(dummyGroups).select();
  if (error) {
     console.error('Error inserting dummy groups:', error);
  } else {
     console.log('Successfully inserted groups:', data.length);
  }
}

run();
