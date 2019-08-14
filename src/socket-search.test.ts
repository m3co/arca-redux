import Socket from 'socket.io-client';
import { ARCASearchSocket } from './socket-search';


const URL = 'http://localhost:8086';
const source = 'FACAD-BuiltInCategories';

test(`Perfoem Search of ${source}`, (done): void => {
  const io = Socket(URL);
  const socket = new ARCASearchSocket(io);

  socket.Search(source, "BuiltInCategory",
    {BuiltInCategory: "lineload"},
    '5832c751-a6a9-4cd2-9235-157d90cb95d3')
    .then(response => {
      expect(response).toMatchSnapshot();
      done();
    });

});
