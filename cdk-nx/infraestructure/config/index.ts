import * as cdk from 'aws-cdk-lib';
import { Options } from '../types/options';

let stackName = "PipelineCdkNx";
let stackPrefix = "main";

export enum Environment{
    DEV= 'DEV',
    PROD='PROD'
}

export const options:Options={
    bucketNameContainer: "mfe-container-mfuentes",
    bucketNameUser: "mfe-user-mfuentes",
    account: "108072982334",
    defaultRegion: "us-west-2",
    rootAccount: "mfuentes-mc",
    reposName: "cdk-nx",
    pipelineName: `${stackPrefix}-${stackName}-pipeline`,
    stackName: stackName,
    stackNamePrefix: stackPrefix,
    stageOptions: [
        {
            environment: Environment.DEV,
            account:'108072982334'
        },
        {
            environment: Environment.PROD,
            account:'108072982334'
        }
    ]
}