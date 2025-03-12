const Chairman = {
  id: 1,
  name: 'Vacant',
  position: 'Chairman, OFDC',
  translation: 'ଅଧ୍ୟକ୍ଷ, ଓଡିଶା ଚଳଚ୍ଚିତ୍ର ଉନ୍ନୟନ ନିଗମ ଲିମିଟେଡ',
  image:""
};
const managingDirector = {
  id: 2,
  name: 'Sri Samarth Verma, IAS',
  position: 'Managing Director, OFDC Ltd.',
  translation: 'ଶ୍ରୀ ସମର୍ଥ ବର୍ମା, ଭା.ପ୍ର.ସେ. | ପରିଚାଳନା ନିର୍ଦ୍ଦେଶକ',
  image:""
};
const nominee = [
  {
    id: 3,
    name: 'Sri Subhendra Kumar Nayak, OAS',
    position: 'Special Secretary to Govt., Industries Department',
    translation: 'ଶ୍ରୀ ଶୁଭେନ୍ଦ୍ର କୁମାର ନାୟକ, ଓ.ପ୍ର.ସେ. | ସ୍ଵତନ୍ତ୍ର ଶାସନ ସଚିବ',
    image:""
  },
  {
    id: 4,
    name: 'Sri Susanta Kumar Singh, OAS (SAG)',
    position: 'Additional Secretary to Govt., Public Enterprise Dept.',
    translation: 'ଶ୍ରୀ ସୁଶାନ୍ତ କୁମାର ସିଂ, ଓ.ପ୍ର.ସେ. (ଏସ୍.ଏ.ଜି.)',
    image:""
  },
  {
    id: 5,
    name: 'Dr. Bijay Ketan Upadhyaya, IAS',
    position: 'Director, Odia Language, Literature & Culture Dept.',
    translation: 'ଡ଼. ବିଜୟ କେତନ ଉପଧ୍ୟାୟ, ଭା.ପ୍ର.ସେ.',
    image:""
  },
  {
    id: 6,
    name: 'Director',
    position: 'Tourism Department, Govt. of Odisha',
    translation: 'ନିର୍ଦ୍ଦେଶକ, ପର୍ଯ୍ୟଟନ ବିଭାଗ',
    image:""
  },
  {
    id: 7,
    name: 'Sri Saroj Kumar Samal, IAS',
    position: 'Director, Information & Public Relation Department',
    translation: 'ଶ୍ରୀ ସରୋଜ କୁମାର ସାମଲ, ଭା.ପ୍ର.ସେ.',
    image:""
  },
  {
    id: 8,
    name: 'Director',
    position: 'Biju Pattanaik Film and Television Institute of Odisha',
    translation: 'ନିର୍ଦ୍ଦେଶକ, ବିଜୁ ପଟ୍ଟନାୟକ ଫିଲ୍ମ ଆଣ୍ଡ ଟେଲିଭିଜନ୍ ଇନଷ୍ଟିଚ୍ୟୁଟ୍',
    image:""
  },
];
const independentDirectors = [
  {
    id: 9,
    name: 'Sri Dillip Kumar Mishra',
    position: 'Chairman, Utkal Cine Chamber of Commerce',
    translation: 'ଶ୍ରୀ ଦିଲ୍ଲୀପ କୁମାର ମିଶ୍ର',
    image:""
  },
  {
    id: 10,
    name: 'Sri Bijendra Kumar Mohanty',
    position: 'Proprietor, Sriya-Swati-Stutee Cineplex',
    translation: 'ଶ୍ରୀ ବିଜେନ୍ଦ୍ର କୁମାର ମହାନ୍ତି',
    image:""
  },
];
const Leadership = () => {
  return (
    <div className="bg-white min-h-screen py-2 max-w-5xl">
      {/* Header Section */}
      <div className="px-12 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Leadership
        </h1>
        <p className="text-lg text-gray-600 w-full">
          At OFDC, strong leadership is the foundation of our success. Our Board
          of Directors and Management Team bring a wealth of experience,
          strategic vision, and commitment to excellence, ensuring that we
          fulfil our mission and drive sustainable growth. The management
          provides governance, oversight, and strategic direction, ensuring that
          OFDC operates with integrity, transparency, and accountability. Their
          collective expertise guides the organization toward long-term success
          and value creation. Our Leadership team is responsible for the
          execution of strategic initiatives, and delivering on organizational
          goals. With deep industry knowledge and a results-driven approach,
          they foster innovation, operational efficiency, and stakeholder
          engagement. Together, our leadership team is dedicated to maintaining
          the highest standards of professionalism and ethical conduct, steering
          OFDC toward continued growth and excellence. This section highlights
          the individuals whose vision and leadership shape the organization’s
          future.
        </p>
      </div>
      {/* chairman Grid */}
      <div className=" py-4">
        <div className=" text-2xl font-semibold pl-12 py-3">Chairman</div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-6">
          <Card name={Chairman.name} position={Chairman.position} />
        </div>
      </div>
      {/* managing Director Grid */}
      <div className=" py-4">
        <div className=" text-2xl font-semibold pl-12 py-3">
          Managing Director
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-6">
          <Card
            name={managingDirector.name}
            position={managingDirector.position}
          />
        </div>
      </div>
      {/* nominee Grid */}
      <div className=" py-4">
        <div className=" text-2xl font-semibold pl-12 py-3">
          Govt. Nominee Directors
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-6">
          {nominee.map((nom, i) => (
            <Card key={i} name={nom.name} position={nom.position} />
          ))}
        </div>
      </div>
      {/* independentDirectors Grid */}
      <div className=" py-4">
        <div className=" text-2xl font-semibold pl-12 py-3">
          Independent Directors
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-6">
          {independentDirectors.map((nom, i) => (
            <Card key={i} name={nom.name} position={nom.position} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;

const Card = ({ name, position }: { name: string; position: string }) => {
  return (
    <div className="bg-white rounded-sm shadow-md text-center transition transform hover:scale-105  w-[255px]">
      <img
        src="https://dg1ya6cdc7ief.cloudfront.net/Upload/Board_of_Director_Images/a75e26863e734f58af39eb7bd836dc1b_20240826054146939.jpg"
        alt="DP"
        className=" w-full"
      />

      <p className="text-lg pt-2 font-semibold px-2 text-gray-800">{name}</p>
      <p className="text-sm text-gray-500 pb-8 pt-2 px-4">{position}</p>
    </div>
  );
};
