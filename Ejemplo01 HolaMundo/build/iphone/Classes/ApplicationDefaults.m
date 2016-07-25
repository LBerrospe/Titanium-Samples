/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 * WARNING: This is generated code. Do not modify. Your changes *will* be lost.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"

@implementation ApplicationDefaults

+ (NSMutableDictionary*) copyDefaults
{
	NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];
	
	[_property setObject:[TiUtils stringValue:@"ML7to6ly1dBewo805auKluN7onjmpPep"] forKey:@"acs-oauth-secret-production"];
	[_property setObject:[TiUtils stringValue:@"pRp9y8VolQ55mEUsjZZ2Azoexi8etkhC"] forKey:@"acs-oauth-key-production"];
	[_property setObject:[TiUtils stringValue:@"5dZ28YCB0gOnteI7neYLEJZW35eC7sgj"] forKey:@"acs-api-key-production"];
	[_property setObject:[TiUtils stringValue:@"2d4Lubm6AuMbLizEXp44O3oFHQDRqX5N"] forKey:@"acs-oauth-secret-development"];
	[_property setObject:[TiUtils stringValue:@"rY7qLh5fOdHCNQAKfNSyoqUPRsMH4CRD"] forKey:@"acs-oauth-key-development"];
	[_property setObject:[TiUtils stringValue:@"hBjqLGHQwQD7JF9KSAYQcxurXxYGXzT4"] forKey:@"acs-api-key-development"];
	[_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];
	return _property;
}

+ (NSDictionary*) launchUrl {
    static BOOL launched = NO;
    if (!launched) {
        launched = YES;
        return nil;
    } else { return nil;}
}
 
@end