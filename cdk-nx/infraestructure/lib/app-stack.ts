import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Environment } from '../config';
import { Options } from '../types/options';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { StackProps } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

interface AppStackProps extends StackProps {
  options: Options,
}


export class AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: AppStackProps) {
    super(scope, id, props);
    
    const pipeline = new CodePipeline(this,`${props?.options.pipelineName}`,{
      pipelineName: `${props?.options.pipelineName}`,
      synth: new ShellStep('Synth',{
        input: CodePipelineSource.gitHub(`${props?.options.rootAccount}/${props?.options.reposName}`,'main'),
        commands: [
          'yarn',
          'yarn build',
          'ls',
          'cd infraestructure',
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
        primaryOutputDirectory: 'infraestructure/cdk.out',
      })
    });
  }
}
