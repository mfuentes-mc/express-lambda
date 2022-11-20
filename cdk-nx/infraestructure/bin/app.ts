#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AppStack } from '../lib/app-stack';
import { options } from '../config';

const app = new cdk.App();
new AppStack(app,`${options.stackNamePrefix}-${options.stackName}` , {
  env:{
    account: options.account,
    region: options.defaultRegion
  },
  options:options
});