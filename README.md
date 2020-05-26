# ARCA-Redux v4

Transfer and storing arca data by using redux

## Usage
### Setup

```

import { createArcaRedux, createArcaSocket } from 'arca-redux-v4';

export const store = createArcaRedux();
export const socket = createArcaSocket(store);

```

### Adding custom reducers and enhancers
Function **createArcaRedux** has two parameters - reducers and enhancers.

```

import { firstReducer, secondReducer } = './redux/reducers.ts';
import logger from 'redux-logger';

const reducers = {
  firstReducer,
  secondReducer,
};

export const createArcaRedux(reducers, [logger]) // enhancers is array

```

### Selectors
ARCA-redux v4 support [reselect!](https://www.npmjs.com/package/reselect)

* **getArcaSource** - get all arca data;
* **getSpecificSource** - get arca data by source;
* **getAggsBySpecificSourceSelector** - get aggregates data by source;

Importing from root:
```

import { getArcaSource, getSpecificSource, getAggsBySpecificSourceSelector } from 'arca-redux-v4';

```
