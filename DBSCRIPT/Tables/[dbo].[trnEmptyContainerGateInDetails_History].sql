USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnEmptyContainerGateInDetails_History]    Script Date: 1/12/2024 9:52:09 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnEmptyContainerGateInDetailsGW_History')
BEGIN
 DROP TABLE trnEmptyContainerGateInDetailsGW_History
END
GO

CREATE TABLE [dbo].[trnEmptyContainerGateInDetails_History](
	[trnEmptyContainerGateInDetails_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnEmptyContainerGateInDetailsID] [bigint] NOT NULL,
	[trnEmptyContainerGateInID] [bigint] NULL,
	[ContainerNumber] [varchar](255) NULL,
	[trnEmptyContainerInWOContainerDetailsID] [bigint] NULL,
	[ISOCode] [varchar](255) NULL,
	[ISOCodeID] [bigint] NULL,
	[WOISOCodeSize] [varchar](255) NULL,
	[WOISOCodeType] [varchar](255) NULL,
	[GrossWeight] [decimal](10, 2) NULL,
	[TareWeight] [decimal](10, 2) NULL,
	[Condition] [varchar](255) NULL,
	[ConditionRemarks] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL,
	[WOISOCode] [varchar](50) NULL,
	[DeleteRemarks] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


