import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { v4 as uuidv4 } from 'uuid';

export class GithubOidcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Generate a UUID
    const uuid = uuidv4();

    const bucket = new Bucket(this, 'MyFirstBucket', {
      bucketName: `my-dummy-bucket-${uuid}`, // Globally unique Bucket name with UUID
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
